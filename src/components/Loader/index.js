import React, {useRef, useEffect} from 'react';
import { TimelineLite } from "gsap";
import "./styles.scss";


// got help using React Hooks and Greensock from here:
// https://blog.logrocket.com/animations-react-hooks-greensock/

const Loader = () => {
    const j = useRef(null);
    const g = useRef(null);

    useEffect(() => {
        var path = document.querySelector('#j');
        var l = path.getTotalLength();
        var path_2 = document.querySelector('#g');
        var l_2 = path.getTotalLength();
        var tl = new TimelineLite();

        tl.add("start");
        tl.set(path, {strokeDasharray:l, autoAlpha:0}, "start");
        tl.fromTo(path, 2, {autoAlpha:0, strokeDashoffset:l}, {strokeDashoffset:0, autoAlpha:1}, "start");

        tl.set(path_2, {strokeDasharray:l_2, autoAlpha:0}, "start+=1");
        tl.fromTo(path_2, 2, {strokeDashoffset:l_2, autoAlpha:0}, {strokeDashoffset:0, autoAlpha:1}, "start+=1");

        tl.add("fade");
        tl.to("#j", .5, {autoAlpha:0}, "fade+=1");
        tl.to("#g", .5, {autoAlpha:0}, "fade+=1");

    }, []);

    return (
        <svg className = "logo" width="100%" height="100%" viewBox="0 0 350 350" style= {{fillRule: "evenodd", clipRule: "evenodd", strokeLinecap:"round", strokeLinejoin: "round", strokeMiterlimit: "1.5"}}>
            <path ref = {j} id="j" d="M125.657,18.932c33.847,0.198 101.541,0.595 101.541,0.595l0.689,150.382c0,0 -1.641,48.794 -51.562,49.481c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{stroke: "#2f2fa2" , strokeWidth: "24px", fill: "none"}}/>
            <path ref = {g} id="g" d="M126.568,168.173c0.22,-25.398 12.422,-54.349 50.006,-54.646c38.38,-0.302 50.847,35.413 50.959,54.646c0.093,16.172 0,92.408 0,92.408c0,0 -1.038,49.046 -50.959,49.733c-49.92,0.687 -50.019,-48.836 -50.006,-48.796" style= {{stroke: "#f64c72" , strokeWidth: "24px", fill: "none"}}/>
        </svg>
    );
}

export default Loader;