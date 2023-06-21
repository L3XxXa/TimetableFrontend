import React,{useState} from 'react';
import './AddSpecialityButton.css'
import CustomInputForAddFaculty from "../../inputs/CustomInputForAddFaculty";

const AddSpecialityButton = (props) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [spec1, setSpec1] = useState("")
    const [spec2, setSpec2] = useState("")
    const handleOpen = () => {
        setShow(!show);
    };

    const handleOpen2 = () => {
        setShow2(!show2);
    };

    function sendData(){
        let data
        if (spec2===""){
            data = {
                specialization1: spec1
            }
        }
        else{
            data = {
                specialization1: spec1,
                specialization2: spec2
            }
        }
        props.sendData(data)
    }

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
                    <CustomInputForAddFaculty placeholder={"Введите название специализации"} value={spec1}  onChange={event => {
                        setSpec1(event.target.value)
                        sendData()
                    }
                    }/>
                    <h1 className="label">Добавить специализацию
                        <div className="accordian-header2" onClick={handleOpen2}>
                            <div className="sign">{show2 ? '-' : '+'}
                            </div>
                        </div>
                    </h1>
                    {show2 && (
                        <div className="accordian-body2">
                            <CustomInputForAddFaculty placeholder={"Введите название специализации"} value={spec2}  onChange={event => {
                                setSpec2(event.target.value)
                                sendData()
                            }
                            }/>
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
