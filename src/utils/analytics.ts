import type { MutableRefObject } from 'react';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    WeFitInvestorAnalytics?: {
      push: (event: Record<string, unknown>) => void;
    };
  }
}

interface AnalyticsPayload {
  readonly event: string;
  readonly category: string;
  readonly action: string;
  readonly label?: string;
  readonly value?: number | string;
  readonly metadata?: Record<string, unknown>;
  readonly timestamp: number;
}

const pushToDataLayer = (payload: AnalyticsPayload) => {
  if (typeof window === 'undefined') return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push(payload);

  if (window.WeFitInvestorAnalytics?.push) {
    window.WeFitInvestorAnalytics.push(payload);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info('[analytics]', payload);
  }
};

export const trackEvent = (payload: Omit<AnalyticsPayload, 'timestamp'>) => {
  const enriched: AnalyticsPayload = {
    ...payload,
    timestamp: Date.now(),
  };

  pushToDataLayer(enriched);
};

export const trackCTA = (label: string, metadata?: Record<string, unknown>) => {
  trackEvent({
    event: 'cta_click',
    category: 'investor_funnel',
    action: 'cta_click',
    label,
    metadata,
  });
};

export const trackDocumentDownload = (label: string, metadata?: Record<string, unknown>) => {
  trackEvent({
    event: 'document_download',
    category: 'investor_resources',
    action: 'download',
    label,
    metadata,
  });
};

export const trackFormProgress = (label: string, step: number, metadata?: Record<string, unknown>) => {
  trackEvent({
    event: 'progressive_lead_capture',
    category: 'investor_funnel',
    action: `step_${step}`,
    label,
    metadata,
  });
};

export const trackMeetingScheduled = (label: string, metadata?: Record<string, unknown>) => {
  trackEvent({
    event: 'meeting_scheduled',
    category: 'investor_funnel',
    action: 'schedule_meeting',
    label,
    metadata,
  });
};

export const useDownloadTracking = (label: string, metadata?: Record<string, unknown>) => {
  return () => trackDocumentDownload(label, metadata);
};

export const bindAnalyticsToElement = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  eventName: string,
  metadata?: Record<string, unknown>,
) => {
  if (typeof window === 'undefined') return;

  const handler = () =>
    trackEvent({
      event: eventName,
      category: 'investor_funnel',
      action: 'interaction',
      metadata,
    });

  const element = ref.current;
  if (element) {
    element.addEventListener('click', handler);
  }

  return () => {
    if (element) {
      element.removeEventListener('click', handler);
    }
  };
};
