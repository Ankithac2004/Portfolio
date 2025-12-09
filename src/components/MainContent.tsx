const scrollToSection = (sectionId: string) => {
  try {
    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (!scrollContainer) {
      console.warn('Scroll container not found');
      return;
    }

    // Map public section id -> actual DOM id (if you have a map)
    const sectionMap: Record<string, string> = {
      about: 'about-main', // keep in sync with your mapping
      resume: 'resume',
      education: 'education',
      projects: 'projects',
      skills: 'skills',
      research: 'research',
      experience: 'experience',
      extra: 'extra',
      events: 'events',
      contact: 'contact',
    };
    const targetId = sectionMap[sectionId] || sectionId;

    const element = document.getElementById(targetId);
    if (!element) {
      console.warn('Target element not found for id:', targetId);
      return;
    }

    // Compute element top relative to the scrollContainer
    let el: HTMLElement | null = element;
    let elTop = 0;
    while (el && el !== scrollContainer && el.offsetParent) {
      elTop += el.offsetTop;
      el = el.offsetParent as HTMLElement;
      // stop if walked beyond the scrollContainer's DOM tree
      if (!el) break;
    }

    // If loop ended because el === scrollContainer, elTop is correct.
    // Fallback: if element is a deep child in different stacking context, compute using getBoundingClientRect
    if (el !== scrollContainer) {
      // Fallback approach; compute by comparing bounding rects
      const containerRect = scrollContainer.getBoundingClientRect();
      const elemRect = element.getBoundingClientRect();
      elTop = (elemRect.top - containerRect.top) + scrollContainer.scrollTop;
    }

    const headerOffset = 80; // tweak this: set to 0 to test if it scrolls fully to top
    const targetScroll = Math.max(0, elTop - headerOffset);

    // Debug logs — remove after confirming behavior
    console.log('scrollToSection ->', { sectionId, targetId, elTop, targetScroll });

    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });

    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  } catch (err) {
    console.error('scrollToSection error', err);
  }
};
