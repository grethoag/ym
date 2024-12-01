(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    7676: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 8121));
    },
    8121: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => j });
      var s = l(5155),
        a = l(5565),
        i = l(2115),
        n = l(1319);
      let o = () => {
          let [e, t] = (0, i.useState)(!1),
            l = (0, i.useRef)(null);
          return ((0, i.useEffect)(() => {
            t(!0);
            let e = document.createElement("script");
            (e.src =
              "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/live2d.min.js?=" +
              new Date().getTime()),
              document.body.appendChild(e),
              (e.onload = () => {
                let e = async () => {
                  if (window.loadlive2d) {
                    if (
                      (window.loadlive2d(
                        "live2d",
                        "https://cdn.jsdelivr.net/gh/evrstr/live2d-widget-models/live2d_evrstr/r93_3501/model.json"
                      ),
                      console.log("pre check"),
                      console.log("live2d :", window.live2DModel),
                      window.live2DModel)
                    ) {
                      console.log("Animating mouth");
                      let e = 0.5,
                        t = 0.02,
                        l = () => {
                          ((e += t) > 0.5 || e < 0) && (t *= -1);
                          try {
                            window.live2DModel.setParamFloat(
                              "PARAM_MOUTH_OPEN_Y",
                              e
                            );
                          } catch (e) {
                            console.error("Could not set mouth parameter:", e);
                          }
                          requestAnimationFrame(l);
                        };
                      l();
                    }
                  } else
                    setTimeout(() => {
                      e();
                    }, 500);
                };
                e();
              });
          }, []),
          e)
            ? (0, s.jsx)("div", {
                className:
                  "flex items-center justify-center ml-[-300px] md:ml-[-600px] md:ml-[-300px] mt-[50px] md:mt-[0px] mx-auto my-auto md:mx-auto z-50",
                children: (0, s.jsx)("canvas", {
                  id: "live2d",
                  ref: l,
                  width: "1400",
                  height: "1200",
                  className: "mx-auto w-full",
                }),
              })
            : null;
        },
        c = [
          "#FF6EC7",
          "#39FF14",
          "#FFDF00",
          "#FF073A",
          "#00FFFF",
          "#FF9933",
          "#9400D3",
          "#7DF9FF",
          "#FBEC5D",
          "#FE59C2",
        ];
      var r = l(7396);
      let d = {
        src: "https://i.imgur.com/6MfFKvI.png",
        height: 500,
        width: 500,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXHci4DVrKW5ZWPp08zC//+Kx9//9NV41PBV6P/NmJWyaGjwu7T/697Cz9jdrKSJxdrOrqfk6unata7C3+bOoZii7/+p2OWRVVuO2fLWn5m2hIXpsKqmW2KUcoC/fX7k0sxHpJnyAAAAG3RSTlMA9P78Og7zCBsL/P4iJ7XIko+9zZDpl+n88P7Tj4u9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nBXLxRGAMAAAwYsbEFyC9l8lk/0vgHFUYV7EEID1S/vTgz9Ope7N4O1bZLIexitG0QHtJEtuanNaO/gBW0ACfHTH8goAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
      var m = l(1416),
        x = l(4928);
      let f = (0, m.eU)(!1);
      function h(e) {
        let { darkmode: t } = e,
          [l, a] = (0, x.fp)(f);
        return (
          (0, i.useEffect)(() => {
            a("true" === localStorage.getItem("darkmode"));
          }, []),
          (0, i.useEffect)(() => {
            localStorage.setItem("darkmode", l.toString());
          }, [l]),
          (0, s.jsxs)("header", {
            className: "".concat(
              l
                ? "z-[500] flex flex-row w-full h-[6%] bg-zinc-900 z-100 justify-between py-3 px-2 text-white"
                : "z-[500] flex flex-row w-full h-[6%] bg-zinc-100 z-100 justify-between py-3 px-2 text-black"
            ),
            children: [
              (0, s.jsxs)("div", {
                className: "font-semibold text-xl my-auto mx-2",
                children: [
                  "YUMI",
                  (0, s.jsx)("span", {
                    className: "text-pink-400",
                    children: "Chat",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-row rounded-full h-8 w-[62px] border-[1px] ".concat(
                    l ? "border-zinc-200" : "border-zinc-400"
                  ),
                children: (0, s.jsx)("button", {
                  className: "".concat(
                    l ? "animatedark" : "animatelight",
                    " transition delay-150 ease-in-out text-left text-sm pl-1"
                  ),
                  onClick: () => a((e) => !e),
                  children: l ? "☾" : "☼",
                }),
              }),
            ],
          })
        );
      }
      let p = [
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1484575656759472128/4vLR6_4F_400x400.png",
          name: "Jesse Pollak",
          at: "@jessepollak",
          followers: "165.4K",
          link: "https://x.com/jessepollak",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1847482699805597696/ZhvERGEx_400x400.jpg",
          name: "Ansem ",
          at: "@blknoiz06",
          followers: "588K",
          link: "https://x.com/blknoiz06",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1861695595456675840/pDgl8RU2_400x400.jpg",
          name: "Luna",
          at: "@luna_virtuals",
          followers: "19.9k",
          link: "https://x.com/luna_virtuals",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1852675087218233344/_ljMm_3G_400x400.jpg",
          name: "aixbt",
          at: "@aixbt_agent",
          followers: "59.5k",
          link: "https://x.com/aixbt_agent",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1858693380580298752/Ee4NMFv9_400x400.jpg",
          name: "SaintAI Bot",
          at: "@SaintAI_Bot",
          followers: "6.6k",
          link: "https://x.com/SaintAI_Bot",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1849948665722359808/uXMAoDxQ_400x400.jpg",
          name: "Dolos",
          at: "@dolos_diary",
          followers: "24.4K",
          link: "https://x.com/dolos_diary",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1808816849620250625/AQIUpfL3_400x400.jpg",
          name: "terminal of truths",
          at: "@truth_terminal",
          followers: "193.3K",
          link: "https://x.com/truth_terminal",
        },
        {
          profilepic:
            "https://pbs.twimg.com/profile_images/1853558007612993536/Jzl4AhJl_400x400.jpg",
          name: "sekoia_virtuals",
          at: "@sekoia_virtuals",
          followers: "6.3K",
          link: "https://x.com/sekoia_virtuals",
        },
      ];
      var u = l(7867);
      let w = ["fuck", "bitch", "whore", "hoe", "nigger", "nigga"],
        g = [
          { name: "0xMachina", amount: 130 },
          { name: "EthanM", amount: 200 },
          { name: "KuroK", amount: 75 },
          { name: "James_W", amount: 50 },
        ];
      var b = l(8640),
        v = l.n(b);
      function j() {
        let [e, t] = (0, i.useState)([]),
          [l, m] = (0, i.useState)(""),
          [b, j] = (0, i.useState)(""),
          [y, N] = (0, i.useState)(!1),
          [z, k] = (0, i.useState)(!1),
          [A, C] = (0, i.useState)(!0),
          [E, S] = (0, i.useState)(!1),
          [D, _] = (0, i.useState)(0),
          [F] = (0, x.fp)(f),
          [M, T] = (0, i.useState)(!0),
          [K, B] = (0, i.useState)(""),
          [P, R] = (0, i.useState)(""),
          [H, O] = (0, i.useState)(!1),
          [U, I] = (0, i.useState)(60),
          [L, G] = (0, i.useState)(!1),
          [W, J] = (0, i.useState)(0),
          [X, V] = (0, i.useState)(0),
          [Z, q] = (0, i.useState)(0),
          [Y, Q] = (0, i.useState)(),
          [$, ee] = (0, i.useState)(),
          [et, el] = (0, i.useState)(""),
          es = [
            // { type: "/telegram", response: "https://t.me/yumivirtuals" },
            { type: "/twitter", response: "https://x.com/yumivirtuals" },
            {
              type: "/ca",
              response: "2JDP7KH7ipkJN7KpgBxzD6v726DnFu7q7Pw9DGGGXrfX",
            },
          ],
          [ea, ei] = (0, i.useState)(null),
          en = (0, i.useRef)(null),
          eo = (0, i.useRef)(null);
        (0, i.useRef)(null);
        let ec = (0, i.useRef)(),
          er = (0, i.useCallback)(() => {
            let l = (0, n.Ay)("wss://waifuainode-production.up.railway.app", {
              reconnection: !0,
              reconnectionAttempts: 5,
              reconnectionDelay: 1e3,
              reconnectionDelayMax: 5e3,
              transports: ["websocket"],
            });
            return (
              l.on("message", (l) => {
                console.log(e),
                  console.log("msg: ", l),
                  t((e) => [...(e || []), l]);
              }),
              l.on("viewerCount", (e) => {
                _(e);
              }),
              l.on("username", (e) => {
                el(e),
                  setTimeout(() => {
                    el("");
                  }, 3e3),
                  console.log(e);
              }),
              ei(l),
              () => {
                l.off("message"), l.off("viewerCount"), l.off("username");
              }
            );
          }, []);
        (0, i.useEffect)(() => er(), [er]),
          (0, i.useEffect)(() => {
            let e = localStorage.getItem("username");
            console.log("localstorage username: ", e),
              e ? (Q(e), B(e)) : console.log("No username"),
              window.innerWidth <= 768 && C(!1),
              R(c[Math.floor(10 * Math.random())]),
              (async function () {
                console.log("fetchmessage hit");
                let e = await fetch(
                    "/api/fetchmessage?timestamp=".concat(Date.now()),
                    {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    }
                  ),
                  l = await e.json();
                console.log(l), console.log(l.body), t(l.body);
              })();
          }, []),
          (0, i.useEffect)(() => {
            if (
              (setTimeout(() => {
                T(!1);
              }, 1500),
              !Y && en.current)
            ) {
              en.current.scrollTop = 0;
              return;
            }
            en.current &&
              (en.current.scrollTop =
                en.current.scrollHeight - en.current.clientHeight);
          }, [e, Y]),
          (0, i.useEffect)(() => {
            eo.current.volume = U / 100;
          }, [U]),
          (0, i.useEffect)(() => {
            let e = eo.current;
            (e.volume = U / 100),
              e.addEventListener("loadedmetadata", () => V(e.duration)),
              e.addEventListener("timeupdate", () => q(e.currentTime)),
              setInterval(() => {
                J((e) => e + 1);
              }, 1e3);
          }, []);
        let ed = v()((t) => {
          let s = l.split("");
          if ((console.log(s.length), s.length < 100)) {
            if (!Y) return;
            if ("Enter" === t.key || "click" === t.type) {
              let t = Date.now();
              if (t - ec.current < 8e3) {
                window.alert("RATE LIMIT EXCEEDED. Please wait 8 seconds.");
                return;
              }
              (ec.current = t),
                w.some((e) => l.toLowerCase().includes(e.toLowerCase()))
                  ? window.alert("No slurs")
                  : (k(!0),
                    ea.emit("message", {
                      text: l,
                      timestamp: Date.now(),
                      name: K,
                      color: P,
                      type: "",
                    }),
                    console.log(P),
                    es.forEach((e) => {
                      l.toLowerCase().includes(e.type) &&
                        ea.emit("message", {
                          text: e.response,
                          timestamp: Date.now(),
                          name: "Mod",
                          color: P,
                          type: "MOD",
                        });
                    }),
                    (async function () {
                      let e = await fetch("/api/sendtoai", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(l),
                        }),
                        t = await e.blob(),
                        s = URL.createObjectURL(t),
                        a = document.getElementById("audio");
                      N(!0), (a.src = s), null == a || a.play();
                    })(),
                    k(!0),
                    setTimeout(() => {
                      k(!1);
                    }, 2e3),
                    m(""),
                    console.log(l),
                    console.log(e));
            }
          }
        }, 5e3);
        function em(e) {
          ("click" === e.type || "Enter" === e.key) &&
            (console.log("target value: ", $),
            Q($),
            B($),
            localStorage.setItem("username", $));
        }
        function ex() {
          Y && ea.emit("username", Y);
        }
        return (
          (0, i.useEffect)(() => {
            let e = eo.current;
            L
              ? ((e.src = "https://voca.ro/1nzPaSGUF2gm"),
                (e.volume = U / 100),
                null == e || e.play())
              : null == e || e.pause();
          }, [L]),
          (0, s.jsxs)("main", {
            className: "".concat(
              F
                ? "flex flex-col w-full min-h-screen md:overflow-hidden md:h-screen bg-zinc-900 text-white ".concat(
                    M ? "overflow-y-hidden" : "overflow-visible"
                  )
                : "flex flex-col w-full min-h-screen md:overflow-hidden md:h-screen bg-zinc-100 text-black ".concat(
                    M ? "overflow-y-hidden" : "overflow-visible"
                  )
            ),
            children: [
              (0, s.jsx)("div", {
                className: "".concat(
                  M
                    ? "absolute flex w-full h-[160%] md:h-screen bg-white z-[10000] overflow-hidden"
                    : "hidden"
                ),
                children: (0, s.jsx)("div", {
                  className: "loading z-[100000] mt-[40%] md:my-auto mx-auto",
                }),
              }),
              (0, s.jsx)(h, { darkmode: F }),
              (0, s.jsx)("audio", { src: "https://voca.ro/1nzPaSGUF2gm", ref: eo }),
              (0, s.jsxs)("div", {
                className:
                  "w-full min-h-screen md:h-[94%] flex flex-col md:overflow-hidden md:flex-row "
                    .concat(A ? "h-[94%] overflow-y-hidden" : "", " ")
                    .concat(
                      M
                        ? "overflow-hidden"
                        : "overflow-visible overflow-y-visible",
                      " "
                    )
                    .concat(F ? "bg-zinc-900" : "bg-zinc-100"),
                children: [
                  (0, s.jsx)("section", {
                    className: "".concat(
                      A
                        ? "w-full md:w-[15%] absolute z-[5000] h-full overflow- py-4 px-1 pt-2 md: md:opacity-100 md:z-50 md:!static opacity-100 md:h-full z-50 md:border-r-[1px] ".concat(
                            F
                              ? "border-zinc-600 bg-zinc-900"
                              : "border-zinc-300 bg-zinc-100 md:bg-zinc-200"
                          )
                        : "z-1000 md:flex md:opacity-100 h-20 md:h-full md:z-50 w-[90px] p-4 md:p-1 justify-center pt-2 opacity-100 :z-[-10] ".concat(
                            F
                              ? "border-zinc-600 bg-zinc-900"
                              : "border-zinc-300 bg-zinc-100 md:bg-zinc-200"
                          )
                    ),
                    children: (0, s.jsxs)("div", {
                      className:
                        "h-[95%] flex flex-col justify-start md:justify-between",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "h-[85%] overflow-y-scroll md:overflow-visible md:h-full",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "w-full flex flex-row justify-between items-center",
                              children: [
                                (0, s.jsx)("h1", {
                                  className: "".concat(
                                    A
                                      ? "visible font-semibold"
                                      : "hidden opacity-0"
                                  ),
                                  children: "Recommended",
                                }),
                                (0, s.jsx)("button", {
                                  className:
                                    "w-fit p-1 rounded-lg transition delay-150 ease-in-out hover:text-zinc-400",
                                  onClick: () => C((e) => !e),
                                  children: (0, s.jsx)(u.P.div, {
                                    animate: { rotate: A ? 180 : 0 },
                                    children: (0, s.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      width: "20",
                                      height: "20",
                                      children: (0, s.jsx)("path", {
                                        d: "M8 5l7 7-7 7",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        fill: "none",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "".concat(
                                A
                                  ? "visible flex flex-col mt-4"
                                  : "visible pt-4 opacity-0 absolute md:!static md:opacity-100 md:z-50 z-[-100]"
                              ),
                              children: (0, s.jsxs)(
                                "div",
                                {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    p.map((e) =>
                                      (0, s.jsxs)(
                                        r.default,
                                        {
                                          href: e.link,
                                          target: "_blank",
                                          className:
                                            "flex flex-row gap-2 p-1 rounded-md overflow-hidden ".concat(
                                              F
                                                ? "hover:bg-zinc-700"
                                                : "hover:bg-zinc-300"
                                            ),
                                          children: [
                                            (0, s.jsx)(a.default, {
                                              src: e.profilepic,
                                              alt: "pfp",
                                              width: 30,
                                              height: 30,
                                              className:
                                                "w-8 h-8 rounded-full lg:w-10 lg:h-10 ".concat(
                                                  "visible"
                                                ),
                                            }),
                                            (0, s.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex flex-col text-sm ".concat(
                                                    A ? "visible" : "hidden"
                                                  ),
                                                children: [
                                                  (0, s.jsx)("h1", {
                                                    className:
                                                      "text-lg font-semibold ".concat(
                                                        "visible"
                                                      ),
                                                    children: e.name,
                                                  }),
                                                  (0, s.jsx)("h1", {
                                                    className:
                                                      "text-pink-500 ".concat(
                                                        "visible"
                                                      ),
                                                    children: e.at,
                                                  }),
                                                  (0, s.jsx)("h1", {
                                                    className:
                                                      "text-sm text-zinc-400 ".concat(
                                                        "visible"
                                                      ),
                                                    children: e.followers,
                                                  }),
                                                ],
                                              },
                                              e.link
                                            ),
                                          ],
                                        },
                                        e.name
                                      )
                                    ),
                                    (0, s.jsx)("button", {
                                      className:
                                        "mx-auto text-pink-500 m-4 transition delay-150 ease-in-out hover:text-pink-400",
                                    }),
                                  ],
                                },
                                "list"
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "flex flex-col items-center justify- bg-pink- mt-[0px] rounded-lg py-1 px-4 gap-0 w-[90%] mx-auto text-left px- text-xl h-fit "
                              .concat(A ? "visible" : "hidden", " ")
                              .concat(
                                F ? "border-zinc-500 bg-black" : "bg-zinc-300"
                              ),
                          children: (0, s.jsxs)("div", {
                            className:
                              "flex flex-col justify-center p-1 px-1 pb-4 w-full",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-row justify-between items-center",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-row gap-2 items-center",
                                    children: [
                                      (0, s.jsx)("h1", {
                                        className: "text-xl ".concat(
                                          L ? "text-green-500" : "text-red-500"
                                        ),
                                        children: "●",
                                      }),
                                      (0, s.jsx)("h1", {
                                        className: "text-sm",
                                        children: "Chill Lofi",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("button", {
                                    className: "px-2 rounded-md",
                                    onClick: () => G((e) => !e),
                                    children: L
                                      ? (0, s.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24",
                                          width: "24",
                                          height: "48",
                                          children: [
                                            (0, s.jsx)("rect", {
                                              x: "6",
                                              y: "5",
                                              width: "4",
                                              height: "14",
                                              fill: "currentColor",
                                            }),
                                            (0, s.jsx)("rect", {
                                              x: "14",
                                              y: "5",
                                              width: "4",
                                              height: "14",
                                              fill: "currentColor",
                                            }),
                                          ],
                                        })
                                      : (0, s.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          viewBox: "0 0 24 24",
                                          width: "24",
                                          height: "48",
                                          children: (0, s.jsx)("path", {
                                            d: "M8 5v14l11-7z",
                                            fill: "currentColor",
                                          }),
                                        }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-row items-center gap-2",
                                children: [
                                  (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "w-4 h-4",
                                    children: (0, s.jsx)("path", {
                                      d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z",
                                    }),
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    step: "0.1",
                                    value: U,
                                    onChange: (e) => I(e.target.value),
                                    className: "transition-all slider",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("section", {
                    className: "relative w-full md:h-[94%]  ".concat(
                      A ? "h-[200px] md:w-[70%]" : "md:w-[80%] h-[600px]"
                    ),
                    children: [
                      " ",
                      (0, s.jsxs)("div", {
                        className: "".concat(
                          A
                            ? "flex w-full h-[500px] md:h-[86%] my- border-[0px] border-black rounded- overflow-hidden bg-[url('/house.png')] bg-cover bg-fixed"
                            : "static flex flex-grow w-full h-[550px] md:h-[90%] my-auto border-[0px] border-black rounded- mx- overflow-hidden bg-white bg-[url('/house.png')] md:bg-cover md:bg-fixed"
                        ),
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-row justify-between absolute md:w-[100%] w-full font-semibold",
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "m-2 text-white rounded-sm p-2 px-4 bg-red-600 font-semibold h-fit",
                                children: "Live",
                              }),
                              et &&
                                (0, s.jsx)(u.P.div, {
                                  initial: { y: -100, opacity: 0 },
                                  animate: { y: 0, opacity: 1 },
                                  exit: { y: -100, opacity: 0 },
                                  transition: {
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                  },
                                  className: "",
                                  children: (0, s.jsx)("div", {
                                    className:
                                      "bg-[#ff69b4] mx-4 mt-4 p-3 rounded-lg shadow-lg",
                                    children: (0, s.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "w-8 h-8 bg-white rounded-full flex items-center justify-center",
                                          children: (0, s.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "#ff69b4",
                                            className: "w-5 h-5",
                                            children: (0, s.jsx)("path", {
                                              d: "M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z",
                                            }),
                                          }),
                                        }),
                                        (0, s.jsxs)("div", {
                                          children: [
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-white font-medium text-sm",
                                              children: "New Follower!",
                                            }),
                                            (0, s.jsxs)("p", {
                                              className:
                                                "text-white/80 text-xs",
                                              children: [
                                                (0, s.jsx)("span", {
                                                  className: "text-zinc-700",
                                                  children: et,
                                                }),
                                                " just followed",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "relative w-full h-full mt-28 md:0",
                            children: (0, s.jsx)(o, {}),
                          }),
                          (0, s.jsx)("div", {
                            className: "".concat(
                              z
                                ? "absolute text-white rounded-full p-2 w-fit h-fit bg-orange-400 border-[2px] border-zinc-300 m-20"
                                : "hidden"
                            ),
                            children: "Thinking...",
                          }),
                          (0, s.jsx)("audio", { id: "audio" }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "flex flex-col lg:flex-row justify-between md:h-fit h-0 md:opacity-100 opacity-0 items-center",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-row",
                            children: [
                              (0, s.jsx)(a.default, {
                                src: d,
                                className: "w-20 h-20 rounded-full",
                                width: 85,
                                height: 35,
                                alt: "pfp",
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col m-2 gap-0",
                                children: [
                                  (0, s.jsx)("h1", {
                                    className:
                                      "font-medium text-2xl z-50 font-semibold",
                                    children: "Yumi",
                                  }),
                                  (0, s.jsx)("h1", {
                                    className:
                                      "font-medium text-md mt-[-3px] text-pink-500 font-semibold",
                                    children: "Just chatting | Anime | WAIFUU",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "w-fit flex flex-row justify-between items-center ".concat(
                                        F ? "text-zinc-500" : "text-zinc-400"
                                      ),
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "m-2 text-red-500 font-semibold text-sm m-2",
                                        children: [
                                          "\uD83D\uDC41 ",
                                          D,
                                          " viewers",
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className: "text-sm",
                                        children: "•",
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "m-2 font-medium text-sm m-2",
                                        children: [
                                          (0, s.jsx)("span", {
                                            children: String(
                                              Math.floor(W / 60)
                                            ).padStart(2, "0"),
                                          }),
                                          ":",
                                          (0, s.jsx)("span", {
                                            children: String(W % 60).padStart(
                                              2,
                                              "0"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "flex flex-col items-center",
                            children: (0, s.jsxs)("div", {
                              className:
                                "flex flex-row justify-end text-white gap-2 m-2 text-sm items-center",
                              children: [
                                (0, s.jsx)(r.default, {
                                  href: "https://x.com/yumivirtuals",
                                  className:
                                    "py-1 px-4 rounded-sm transition delay-150 ease-in-out ".concat(
                                      "bg-pink-500"
                                    ),
                                  onClick: ex,
                                  target: "_blank",
                                  children: "♥ Follow",
                                }),
                                (0, s.jsx)(r.default, {
                                  href: "https://fun.virtuals.io",
                                  className:
                                    "bg-zinc-300 py-1 px-4 rounded-sm text-zinc-600",
                                  children: "BUY $YUMI :)",
                                }),
                           /*      (0, s.jsx)(r.default, {
                                  href: "https://t.me/yumivirtuals",
                                  className:
                                    "bg-zinc-300 py-1 px-4 rounded-sm text-zinc-600",
                                  children: "★ Telegram",
                                }), */
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    className:
                      "w-full h-[450px] md:mt-[0px] mt-[-30px] md:h-[100%] pb-4 my-auto z-50 border-l-[0px] md:border-l-[1px] "
                        .concat(A ? " md:w-[20%]" : "md:w-[20%]", " ")
                        .concat(
                          F
                            ? "border-zinc-600 bg-zinc-900"
                            : "border-zinc-300 bg-zinc-100 md:bg-zinc-50"
                        ),
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex justify-center items-center md:hidden",
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex flex-row justify-end text-white gap-2 m-2 text-sm items-center",
                          children: [
                            (0, s.jsx)(r.default, {
                              href: "https://x.com/yumivirtuals",
                              className:
                                "py-1 px-4 rounded-sm transition delay-150 ease-in-out ".concat(
                                  "bg-pink-500"
                                ),
                              onClick: ex,
                              target: "_blank",
                              children: "♥ Follow",
                            }),
                            (0, s.jsx)(r.default, {
                              href: "https://yumilive.pages.dev",
                              className:
                                "bg-zinc-300 py-1 px-4 rounded-sm text-zinc-600",
                              children: "BUY $ASU (CA) :)",
                            }),
                          /*   (0, s.jsx)(r.default, {
                              href: "https://t.me/yumivirtuals",
                              className:
                                "bg-zinc-300 py-1 px-4 rounded-sm text-zinc-600",
                              children: "★ Telegram",
                            }), */
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "".concat(
                          F
                            ? "flex justify-center border-y-[1px] border-zinc-600 md:border-y-0 w-full h-fit md:h-[6%] overflow-hidden font-semibold bg-zinc-700"
                            : "flex justify-center border-y-[1px] border-zinc-300 md:border-y-0 w-full h-fit md:h-[6%] overflow-hidden font-semibold bg-zinc-100"
                        ),
                        children: (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "animation flex gap-1 whitespace-nowrap mx-2 p-2 h-fit my-auto ".concat(
                                F ? "text-white" : "text-black"
                              ),
                            children: [
                              "DONOS:",
                              g.map((e) =>
                                (0, s.jsxs)("div", {
                                  className: "flex flex-row gap-1",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "text-pink-500",
                                      children: e.name,
                                    }),
                                    " : ",
                                    (0, s.jsxs)("div", {
                                      className: "text-zinc-500",
                                      children: [e.amount, "$"],
                                    }),
                                  ],
                                })
                              ),
                            ],
                          },
                          "donors"
                        ),
                      }),
                      (0, s.jsxs)("div", {
                        className: "relative ".concat(
                          Y ? "overflow-y-scroll" : "overflow-hidden",
                          " overflow-x-hidden custom-scrollbar h-[250px] md:h-[82%] w-full px-0 md:px-4"
                        ),
                        ref: en,
                        style: { flexDirection: "column" },
                        children: [
                          (0, s.jsx)("div", {
                            className: "".concat(
                              e ? "hidden" : "visible mx-auto my-auto"
                            ),
                            children: "Loading...",
                          }),
                          (0, s.jsxs)("div", {
                            className: "".concat(
                              Y
                                ? "hidden"
                                : "absolute left-0 bottom-0 w-full flex flex-col h-full gap-1 items-center backdrop-blur-sm z-50 justify-center px-2"
                            ),
                            children: [
                              (0, s.jsx)("h1", {
                                className: "font-semibold text-lg text-left",
                                children: "Enter a username to chat:",
                              }),
                              (0, s.jsx)("input", {
                                className: "".concat(
                                  F
                                    ? "mx-auto md:mx-auto border-[0px] w-full h-fit border-black rounded-md px-2 py-2 bg-zinc-700"
                                    : "mx-auto md:mx-auto border-[0px] w-full h-fit border-black rounded-md px-2 py-2 bg-zinc-200"
                                ),
                                placeholder: "Username",
                                value: Y,
                                onKeyDown: em,
                                onChange: (e) => ee(e.target.value),
                              }),
                              (0, s.jsx)("button", {
                                className:
                                  "py-1 px-4 rounded-sm transition delay-150 ease-in-out bg-pink-500 my-2 rounded-md text-white w-full hover:bg-pink-400",
                                onClick: em,
                                children: "Select",
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "".concat("visible"),
                            children:
                              null == e
                                ? void 0
                                : e.map((e) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex gap-2 w-full px-4 py-1 m-0 md:m-1 rounded-lg border-[0px] border-black mx-auto break-all overflow-hidden md:mx-0 ".concat(
                                            e.type ? "bg-pink-100" : ""
                                          ),
                                        children: [
                                          (0, s.jsxs)("div", {
                                            style: { color: e.color },
                                            className:
                                              "font-semibold no-wrap whitespace-nowrap",
                                            children: [e.name, ":"],
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: "".concat(
                                              e.type
                                                ? "text-red-500 font-semibold"
                                                : ""
                                            ),
                                            children: [" ", e.text],
                                          }),
                                        ],
                                      },
                                      e.timestamp
                                    )
                                  ),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: ""
                          .concat("visible", " ")
                          .concat(
                            F
                              ? "border-t-[1px] pt-3 border-zinc-500 bg-zinc-900 w-full h-[100px] md:h-[6%] flex flex-row md:flex-col gap-0 md:gap-1 px-2"
                              : "border-t-[1px] pt-3 bg-zinc-50 w-full h-[100px] md:h-[6%] flex flex-row md:flex-col gap-0 md:gap-1 px-2"
                          ),
                        children: (0, s.jsxs)("div", {
                          className:
                            "w-full flex flex-row items-center items-center justify-end h-full overflow-hidden px-1",
                          children: [
                            (0, s.jsx)("input", {
                              className: "".concat(
                                F
                                  ? "mx-auto md:mx-auto border-[0px] w-full h-fit border-black rounded-md px-2 py-2 bg-zinc-700"
                                  : "mx-auto md:mx-auto border-[0px] w-full h-fit border-black rounded-md px-2 py-2 bg-zinc-200"
                              ),
                              placeholder: "Talk to waifu!",
                              value: l,
                              onChange: (e) => m(e.target.value),
                              onKeyDown: ed,
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "absolute justify-end w-fit md:w-fit flex flex-row my-auto overflow-hidden z-0",
                              children: (0, s.jsx)("button", {
                                className:
                                  "flex justify-end text-white bg-pink-500 border-[2px] border-pink-400 p-1 px-4 text-xs rounded-md m-1",
                                onClick: ed,
                                children: "↑",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "".concat(
                          b ? "absolute w-full md:w-0 md:mt-0" : "hidden"
                        ),
                        children: (0, s.jsx)("div", {
                          className: "".concat(
                            b
                              ? "ml-1 mx-auto p-1 px-3 bg-red-500 border-[2px] border-red-400 w-fit rounded-md text-xs text-white"
                              : "hidden"
                          ),
                          children: b,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [730, 441, 517, 358], () => t(7676)), (_N_E = e.O());
  },
]);
