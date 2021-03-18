/**
 * Waiting the static library loaded before jQuery used there functions.
 * @param {*} jQuery 
 * @param {string} element 
 * @param {string} functionName 
 * @param {object} config 
 * @returns a timer (interval).
 */
export function resolveFunction(jQuery, element, functionName, config = {}) {
  let timer;
  try {
    timer = setInterval(() => {
      if (typeof jQuery(element)[functionName] === "function") {
        clearInterval(timer);
        jQuery(element)[functionName](config);
      }
    }, 500);
  } catch (error) {
    clearInterval(timer);
  }
  return timer;
}
