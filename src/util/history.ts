export const dispatchHistory = (url: string) => {
  const pushStateEvent = new CustomEvent("pushstate", {
    detail: { url },
  });
  window.dispatchEvent(pushStateEvent);
};
