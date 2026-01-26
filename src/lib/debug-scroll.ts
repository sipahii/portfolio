'use client'

// #region agent log
// Scroll event debugging for mobile lag investigation
if (typeof window !== 'undefined') {
  let scrollCount = 0;
  let lastScrollTime = 0;
  
  const throttledScrollLog = () => {
    const now = Date.now();
    if (now - lastScrollTime > 1000) { // Log once per second
      scrollCount++;
      lastScrollTime = now;
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:13',message:'Scroll event fired',data:{scrollCount,scrollY:window.scrollY,timestamp:now},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
    }
  };
  
  window.addEventListener('scroll', throttledScrollLog, { passive: true });
  
  // Detect touch events
  let touchCount = 0;
  window.addEventListener('touchstart', () => {
    touchCount++;
    fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:24',message:'Touch event',data:{touchCount},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
  }, { passive: true });
  
  // Check for animation frames
  let frameCount = 0;
  const checkAnimations = () => {
    frameCount++;
    if (frameCount % 60 === 0) { // Log every 60 frames (~1 second at 60fps)
      const computedStyle = window.getComputedStyle(document.documentElement);
      const hasAnimations = document.getAnimations().length;
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:34',message:'Animation check',data:{frameCount,activeAnimations:hasAnimations},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
    }
    requestAnimationFrame(checkAnimations);
  };
  requestAnimationFrame(checkAnimations);
  
  // CRITICAL: Track ALL keyboard events globally (Tab+Enter sequence)
  let keySequence: string[] = [];
  let lastKeyTime = 0;
  
  window.addEventListener('keydown', (e) => {
    const now = Date.now();
    const activeEl = document.activeElement as HTMLElement;
    
    // Track key sequence (reset if > 2 seconds between keys)
    if (now - lastKeyTime > 2000) {
      keySequence = [];
    }
    keySequence.push(e.key);
    if (keySequence.length > 5) keySequence.shift(); // Keep last 5 keys
    lastKeyTime = now;
    
    // Log Tab and Enter keys with full context
    if (e.key === 'Tab' || e.key === 'Enter') {
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:59',message:'GLOBAL keyboard event - Tab or Enter',data:{key:e.key,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,activeElement:activeEl?.tagName,activeId:activeEl?.id,activeClass:activeEl?.className,activeHref:(activeEl as HTMLAnchorElement)?.href,keySequence:keySequence.join('+'),defaultPrevented:e.defaultPrevented},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H2,H4'})}).catch(()=>{});
    }
    
    // Special tracking for Tab+Enter sequence
    if (keySequence.length >= 2 && keySequence[keySequence.length - 2] === 'Tab' && keySequence[keySequence.length - 1] === 'Enter') {
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:67',message:'!!!TAB+ENTER SEQUENCE DETECTED!!!',data:{activeElement:activeEl?.tagName,activeHref:(activeEl as HTMLAnchorElement)?.href,activeText:activeEl?.textContent?.substring(0,30)},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'ALL'})}).catch(()=>{});
    }
  }, true); // Use capture phase to catch ALL events
  
  // Track when page becomes unresponsive (no events for a while after interaction)
  let lastInteractionTime = Date.now();
  let unresponsivenessLogged = false;
  
  ['click', 'touchstart', 'keydown'].forEach(eventType => {
    window.addEventListener(eventType, () => {
      lastInteractionTime = Date.now();
      unresponsivenessLogged = false;
    }, true);
  });
  
  setInterval(() => {
    const timeSinceInteraction = Date.now() - lastInteractionTime;
    if (timeSinceInteraction > 3000 && timeSinceInteraction < 5000 && !unresponsivenessLogged) {
      const activeEl = document.activeElement as HTMLElement;
      fetch('http://127.0.0.1:7243/ingest/ff32af97-a210-4d19-a1c3-d1f3a6bbf43e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'debug-scroll.ts:90',message:'POSSIBLE UNRESPONSIVENESS - no events for 3+ seconds',data:{timeSinceInteraction,activeElement:activeEl?.tagName,activeHref:(activeEl as HTMLAnchorElement)?.href},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'ALL'})}).catch(()=>{});
      unresponsivenessLogged = true;
    }
  }, 1000);
}
// #endregion

export {};
