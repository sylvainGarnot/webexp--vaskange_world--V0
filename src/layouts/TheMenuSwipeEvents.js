let xDown = null;

function getTouches(event) {
  return event.touches || event.originalEvent.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
  // console.log("handleTouchStart", xDown); // TEST
}

function handleTouchMove(event) {
  if (!xDown) {
    return;
  }
  const xUp = event.touches[0].clientX;
  const xDiff = xDown - xUp;
  if (xDiff > 0) {
    const swipeRight = new CustomEvent("swipeRight", {});
    window.dispatchEvent(swipeRight);
    // console.log("handleTouchMove - RIGHT SWIPE", xDiff); // TEST
  } else {
    const swipeLeft = new CustomEvent("swipeLeft", {});
    window.dispatchEvent(swipeLeft);
    // console.log("handleTouchMove - LEFT SWIPE", xDiff); // TEST
  }
  xDown = null;
}

export function useSwipeEvents() {
  window.addEventListener("touchstart", handleTouchStart, false);
  window.addEventListener("touchmove", handleTouchMove, false);
}
