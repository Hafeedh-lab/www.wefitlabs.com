import React from 'react';

const STORAGE_PREFIX = 'wefit-investor';

type InvestorEventName =
  | 'funnel_initialized'
  | 'cta_clicked'
  | 'document_requested'
  | 'document_downloaded'
  | 'lead_capture_submitted'
  | 'meeting_scheduled'
  | 'ab_test_assigned';

type InvestorEventPayload = Record<string, string | number | boolean | undefined>;

const getDataLayer = (): any[] | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const scope = window as unknown as { dataLayer?: any[] };
  if (!scope.dataLayer) {
    scope.dataLayer = [];
  }

  return scope.dataLayer;
};

export const trackInvestorEvent = (event: InvestorEventName, payload: InvestorEventPayload = {}): void => {
  const layer = getDataLayer();
  const timestamp = new Date().toISOString();

  const entry = {
    event,
    timestamp,
    ...payload,
  };

  if (layer) {
    layer.push(entry);
  }

  if (typeof window !== 'undefined' && window.console) {
    window.console.info('[InvestorAnalytics]', entry);
  }
};

export const initializeInvestorFunnelTracking = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const scope = window as unknown as Record<string, unknown>;
  const key = `${STORAGE_PREFIX}-initialized`;
  if (!scope[key]) {
    scope[key] = true;
    trackInvestorEvent('funnel_initialized', {
      origin: document.referrer || 'direct',
      pathname: window.location.pathname,
    });
  }
};

const assignVariant = (experimentId: string): 'A' | 'B' => {
  if (typeof window === 'undefined') {
    return 'A';
  }

  const storageKey = `${STORAGE_PREFIX}-experiment-${experimentId}`;
  const existing = window.localStorage.getItem(storageKey) as 'A' | 'B' | null;
  if (existing) {
    return existing;
  }

  const variant = Math.random() > 0.5 ? 'A' : 'B';
  window.localStorage.setItem(storageKey, variant);
  trackInvestorEvent('ab_test_assigned', { experimentId, variant });
  return variant;
};

export const useInvestorCTAVariant = (experimentId: string): 'A' | 'B' => {
  const [variant, setVariant] = React.useState<'A' | 'B'>(() => assignVariant(experimentId));

  React.useEffect(() => {
    setVariant(assignVariant(experimentId));
  }, [experimentId]);

  return variant;
};

export const trackDocumentIntent = (resourceId: string): void => {
  trackInvestorEvent('document_requested', { resourceId });
};

export const trackDocumentDownload = (resourceId: string): void => {
  trackInvestorEvent('document_downloaded', { resourceId });
};

export const trackLeadCapture = (formId: string, investorType: string, stage: string): void => {
  trackInvestorEvent('lead_capture_submitted', {
    formId,
    investorType,
    stage,
  });
};

export const trackMeetingScheduled = (channel: string): void => {
  trackInvestorEvent('meeting_scheduled', { channel });
};
