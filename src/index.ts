import "../public/global.scss";

window.onload = () => {
  const HOME = "/";
  const REACT = "/react";
  const VUE = "/vue";
  const SVELTE = "/svelte";

  // 라우팅 되는 인스턴스
  const instances = {
    [HOME]: globalThis.reactInstance, // todo: change
    [REACT]: globalThis.reactInstance,
    [VUE]: globalThis.vueInstance,
    [SVELTE]: globalThis.svelteInstance,
  };

  // 현재 url path에 따라 렌더링하는 함수
  const renderBody = () => {
    const { pathname } = window.location;
    const REG_EXP = {
      HOME: new RegExp(`^${HOME}$`, "i"),
      REACT: new RegExp(`^${REACT}/?`, "i"),
      VUE: new RegExp(`^${VUE}/?`, "i"),
      SVELTE: new RegExp(`^${SVELTE}/?`, "i"),
    };

    const isHomePage = pathname.match(REG_EXP.HOME);
    const isReactPage = pathname.match(REG_EXP.REACT);
    const isVuePage = pathname.match(REG_EXP.VUE);
    const isSveltePage = pathname.match(REG_EXP.SVELTE);

    // page별로 인스턴스를 mount하는 함수
    const mount = (currentPage: keyof typeof instances) => {
      Object.keys(instances).map((name) => {
        instances[name as keyof typeof instances].unmount();
      });
      instances[currentPage].mount();
    };

    if (isHomePage) {
      mount(HOME);
      return;
    } else if (isReactPage) {
      mount(REACT);
      return;
    } else if (isVuePage) {
      mount(VUE);
      return;
    } else if (isSveltePage) {
      mount(SVELTE);
      return;
    }
    console.error("wrong page");
  };
  renderBody(); // 최초 렌더링

  // 'pushstate' 이벤트에 대한 처리
  window.addEventListener("pushstate", ((e: CustomEvent<{ url: string }>) => {
    history.pushState({}, "", e.detail.url);
    renderBody();
  }) as EventListener);

  window.addEventListener("popstate", () => {
    renderBody();
  });
};
