// Google Analytics events

const Events = {
  ctaLaunch: 'cta_launch_click',
  ctaSupport: 'cta_support_click',
};

const Labels = {
  launchNav: 'launch_from_nav',
  launchMain: 'launch_from_main',
};

const _sendEvent = (event = '', category, label) => {
  if (process.env.NODE_ENV === 'development') return;
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', event, {
    event_category: category,
    event_label: label,
  });
}

const sendLaunchCtaFromNav = () => _sendEvent(Events.ctaLaunch, undefined, Labels.launchNav);

const sendLaunchCtaFromMain = () => _sendEvent(Events.ctaLaunch, undefined, Labels.launchMain);

const sendSupportCta = () => _sendEvent(Events.ctaSupport);

const ga = {
  sendLaunchCtaFromMain,
  sendLaunchCtaFromNav,
  sendSupportCta,
};

export default ga;
