import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import Modal from "./Modal";

// const Navlist = ({name}) => {
//     return (
//         <li>{name}</li>
//     );
// };


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();
  
    useOnClickOutside(ref, dropdown, () => setDropdown(false));

    return (
        <nav className="">
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <Modal name='About' />
                <li ref={ref}>
                    <button onClick={() => setDropdown(!dropdown)}>
                        Services 
                        <span>&#8595;</span>
                    </button>
                    {dropdown && (
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
    
};

// const Navbar = () => {
//     return (
//         <nav className="">
//             <ul>
//                 < Navlist name= 'Home' />
//                 < Navlist name= 'Gallery' />
//                 < Navlist name= 'About' />
//                 < Navlist name= 'Contact Us' />
//             </ul>
//         </nav>
//     );
    
// };



export default Navbar