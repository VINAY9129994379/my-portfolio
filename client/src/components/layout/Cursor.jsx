import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const cur = document.getElementById("cur");
    const ring = document.getElementById("cur-r");

    let mx=0,my=0,rx=0,ry=0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener("mousemove", move);

    const anim = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;

      ring.style.left = rx - 16 + "px";
      ring.style.top = ry - 16 + "px";

      requestAnimationFrame(anim);
    };

    anim();

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cur"></div>
      <div id="cur-r"></div>
    </>
  );
}