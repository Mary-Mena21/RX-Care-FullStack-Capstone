import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "bootstrap";

export const PrescriptionList = ({ patient_Id }) => {
    const [Prescription, setPrescription] = useState([]);

        //--------------------------------
var appUser = localStorage.getItem("app_user");
var appUserObject = JSON.parse(appUser);
console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type)

    /* -------------Display PrescriptionList----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/prescription/Patient/${patient_Id}`
            );
            const PrescriptionListArray = await response.json();
            setPrescription(PrescriptionListArray);
            console.log(PrescriptionListArray);
        };
        fetchData();
    }, []);
    //TODO: Update FORM
    return (
        <>
            {/* <div> */}
            {/*  <Accordion> */}
            <Accordion.Item eventKey="0">
                <Accordion.Header>PRESCRIPTIONXX</Accordion.Header>

                {Prescription.map((pres) => {
                    return (
                        <>
                            <Accordion.Body>
                                <div class="content-tabs profile-tab">
                                    <div class="row">
                                        <div class="tab-pane show active2">
                                            <br />

                                            <div class="profile-head">
                                                <ul class="nav nav-tabs ">
                                                    &nbsp;&nbsp;
                                                    {/* --------------------------------Doctor */}
                                                    {appUserObject.type == "Doctor" ? (
                                                        <>
                                                    <li class="nav-item">
                                                        {/*  <a class="nav-link ">
                                                            </a> */}

                                                        <Link
                                                            to={`UpdatePrescription/edit/${pres.id}`}
                                                        >
                                                            {" "}
                                                            <input
                                                                type="submit"
                                                                class="profile-edit-btn-comment"
                                                                name="btnAddMore"
                                                                value="Update"
                                                            />
                                                        </Link>
                                                    </li>
                                                    &nbsp;&nbsp;
                                                    <li class="nav-item">
                                                        {/*    <a class="nav-link ">
                                                            {" "}
                                                            DELETE
                                                            </a> */}
                                                        {/* <Link to={`UpdatePrescription/edit/${pres.id}`}>
                                                            {" "} */}
                                                        <input
                                                            type="submit"
                                                            class="profile-edit-btn-comment"
                                                            name="btnAddMore"
                                                            value="Delete"
                                                            onClick={() => {
                                                                window.confirm(
                                                                    `Are you sure you want to delete Prescription ${pres.medicine.medicineName}?`
                                                                ) &&
                                                                    fetch(
                                                                        `https://localhost:7183/api/prescription/${pres.id}`,
                                                                        {
                                                                            method:
                                                                                "DELETE",
                                                                        }
                                                                    ).then();
                                                                // navigate(
                                                                //     "/Students"
                                                                // );
                                                            }}
                                                        />
                                                        {/* </Link> */}
                                                            </li>
                                                            </>
                                                            ):("")}
                                                    {/* --------------------------------Patient */}
                                                    &nbsp;&nbsp;
                                                    {appUserObject.type == "Patient" ? (
                                                        <>
                                                    <li class="nav-item">
                                                        <Link
                                                            to={`profile2/addCommentFromPatient/${patient_Id}`}
                                                        >
                                                            <input
                                                                type="submit"
                                                                class="profile-edit-btn-comment"
                                                                name="btnAddMore"
                                                                value="Add Comment"
                                                            />
                                                        </Link>
                                                            </li>
                                                            </>
                                                            ):("")}
                                                    {/* --------------------------------Patient */}

                                                    {/*                                                     <li class="nav-item">
                                                        <a class="nav-link ">
                                                            {" "}
                                                            REPORT{" "}
                                                        </a>
                                                        </li>*/}
                                                    {/*          <li class="nav-item">
                                                        <a class="nav-link ">
                                                            {" "}
                                                            U_ADD-COMMENT-USER{" "}
                                                        </a>
                                                    </li> */}
                                                </ul>
                                                <hr />
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Drug Name</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {
                                                            pres.medicine
                                                                .medicineName
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label></label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        <img
                                                            src={
                                                                pres.medicine
                                                                    .imgUrl
                                                            }
                                                            className="medical-img"
                                                        />
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Dosage</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{pres.dosage}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Quantity</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{pres.quantity}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Form</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{pres.medicine.form}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>SideEffects</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {
                                                            pres.medicine
                                                                .sideEffects
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Drug Info</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {pres.medicine.drugInfo}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </>
                    );
                })}
                {/* <p>{Prescription. dosage}</p> */}
            </Accordion.Item>

            {/*                     <Accordion.Item eventKey="1">
                        <Accordion.Header>COMMENTS</Accordion.Header>
                        <Accordion.Body>DEF</Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>REPORT</Accordion.Header>
                        <Accordion.Body>DEF</Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            {/*       <br />
            </div> */}
        </>
    );
};