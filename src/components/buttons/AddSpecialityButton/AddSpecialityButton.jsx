import React,{useState} from 'react';
import './AddSpecialityButton.css'
import ReactDOM from "react-dom";
import CustomInputForAddFaculty from "../../inputs/CustomInputForAddFaculty";

const AddSpecialityButton = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleOpen = () => {
        setShow(!show);
    };

    const handleOpen2 = () => {
        setShow2(!show2);
    };

    return(
        <div>
            <h1 className="label">Добавить специализацию
                <div className="accordian-header" onClick={handleOpen}>
                <div className="sign">{show ? '-' : '+'}
                </div>
            </div>
            </h1>
            {show && (
                <div className="accordian-body">
                    <CustomInputForAddFaculty/>
                    <h1 className="label">Добавить специализацию
                        <div className="accordian-header2" onClick={handleOpen2}>
                            <div className="sign">{show2 ? '-' : '+'}
                            </div>
                        </div>
                    </h1>
                    {show2 && (
                        <div className="accordian-body2">
                            <CustomInputForAddFaculty placeholder={"Введите название факультета"} />
                        </div>

                    )}
                </div>
            )}

        </div>

    );

    // const rootElement = document.getElementById("root");
    // ReactDOM.render(<AddSpecialityButton />, rootElement);

};

export default AddSpecialityButton;
