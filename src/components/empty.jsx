import React from "react";  
import manhole from "../assets/products/manhole-cover.png";
import grate from "../assets/products/grate.png";
import surbox from "../assets/products/surface-box.png";
import metbox from "../assets/products/meter-box.png";
import tecplate from "../assets/products/tactile.png";
import flange from "../assets/products/flange.png";
import counweight from "../assets/products/counter-weight.png";
import uh from "../assets/products/upper-housing.png";
import lh from "../assets/products/lower-housing.png";
import owb from "../assets/products/open-well-bracket.png";
import owmb from "../assets/products/open-well-motor-body.png";
import motorbase from "../assets/products/motor-base.png";
import owbase from "../assets/products/open-well-base.png";
import mb from "../assets/products/motor-body.png";
import cpa from "../assets/products/column-pipe-adapter.png";
import connection from "../assets/products/connection.png";
import diskbrake from "../assets/products/disk-brake.png";
import brakedrum from "../assets/products/brake-drum.png";
import impeller from "../assets/products/impeller.png";
import sleeve from "../assets/products/sleeves.png";
import pulley from "../assets/products/pulley.png";

export default function Profile() {
    return (
            <div>
                <section className="main text-[#333] p-5 pr-5 pt-5 pb-5 text-center flex justify-center items-center flex-col">
                    <p className="text-[1.3rem] text-[#666]">The Company is engaged in producing a wide range of product profile</p>
                    <h2 className="text-2xl font-bold mb-2.5">Product Profile</h2>
                </section>
                <section className="prod p-5 max-w-[1200px] mx-auto">
                    <div className="category mb-10">
                        <h3 className="text-[1.8rem] text-[#ed3237] text-center mb-5">Sanitary Casting</h3>
                        <div className="cards flex flex-wrap gap-5 justify-center">
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Manhole Covers</p>
                                <img className="w-full h-[150px] object-contain m-2" src={manhole} alt="Manhole Cover" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Grates</p>
                                <img className="w-full h-[150px] object-contain m-2" src={grate} alt="Grate" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Surface Boxes</p>
                                <img className="w-full h-[150px] object-contain m-2" src={surbox} alt="Surface Box" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Meter Boxes</p>
                                <img className="w-full h-[150px] object-contain m-2" src={metbox} alt="Meter Box" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Tectile Plate</p>
                                <img className="w-full h-[150px] object-contain m-2" src={tecplate} alt="Tectile Plate" />
                            </div>
                        </div>
                    </div>
                    <div className="category mb-10">
                        <h3 className="text-[1.8rem] text-[#ed3237] text-center mb-5">Industrial Casting</h3>
                        <div className="cards flex flex-wrap gap-5 justify-center">
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Flanges</p>
                                <img className="w-full h-[150px] object-contain m-2" src={flange} alt="Flange" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Counterweights</p>
                                <img className="w-full h-[150px] object-contain m-2" src={counweight} alt="Counterweight" />
                            </div>
                        </div>
                    </div>
                    <div className="category mb-10">
                        <h3 className="text-[1.8rem] text-[#ed3237] text-center mb-5">Pump and Valve casting</h3>
                        <div className="cards flex flex-wrap gap-5 justify-center">
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Motor Upper Housing</p>
                                <img className="w-full h-[150px] object-contain m-2" src={uh} alt="Motor Upper Housing" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Motor Lower Housing</p>
                                <img className="w-full h-[150px] object-contain m-2" src={lh} alt="Motor Lower Housing" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Valve</p>
                                <img className="w-full h-[150px] object-contain m-2" src="" alt="" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Open Well Bracket</p>
                                <img className="w-full h-[150px] object-contain m-2" src={owb} alt="Open Well Bracket" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Open Well Motor Body</p>
                                <img className="w-full h-[150px] object-contain m-2" src={owmb} alt="Open Well Motor Body" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Motor Base</p>
                                <img className="w-full h-[150px] object-contain m-2" src={motorbase} alt="Motor Base" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Motor Body</p>
                                <img className="w-full h-[150px] object-contain m-2" src={mb} alt="Motor Body" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">NRV</p>
                                <img className="w-full h-[150px] object-contain m-2" src="" alt="" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Suction</p>
                                <img className="w-full h-[150px] object-contain m-2" src="" alt="" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Open Well Base</p>
                                <img className="w-full h-[150px] object-contain m-2" src={owbase} alt="Open Well Base" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">End Shield Castings</p>
                                <img className="w-full h-[150px] object-contain m-2" src="" alt="" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Column Pipe Adapter</p>
                                <img className="w-full h-[150px] object-contain m-2" src={cpa} alt="Column Pipe Adapter" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Connection Piece</p>
                                <img className="w-full h-[150px] object-contain m-2" src={connection} alt="Connection Piece" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Volute Casting</p>
                                <img className="w-full h-[150px] object-contain m-2" src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="category mb-10">
                        <h3 className="text-[1.8rem] text-[#ed3237] text-center mb-5">Automotive Castings</h3>
                        <div className="cards flex flex-wrap gap-5 justify-center">
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Disk Brake</p>
                                <img className="w-full h-[150px] object-contain m-2" src={diskbrake} alt="Disk Brake" />
                            </div>
                    <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Brake Drum</p>
                        <img className="w-full h-[150px] object-contain m-2" src={brakedrum} alt="Brake Drum" />
                    </div>
                </div>
                    </div>
                    <div className="category mb-10">
                        <h3 className="text-[1.8rem] text-[#ed3237] text-center mb-5">Other Castings</h3>
                        <div className="cards flex flex-wrap gap-5 justify-center">
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Impeller</p>
                                <img className="w-full h-[150px] object-contain m-2" src={impeller} alt="Impeller" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Sleeve</p>
                                <img className="w-full h-[150px] object-contain m-2" src={sleeve} alt="Sleeve" />
                            </div>
                            <div className="ticket flex flex-col items-center justify-start w-[300px] h-[300px] p-2.5 border border-[#ddd] rounded-lg bg-[#f9f9f9] text-center box-border flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                <p className="m-2 text-[1.1rem] text-[#333] font-bold text-center p-2 flex items-center justify-center flex-grow-0">Pulley</p>
                                <img className="w-full h-[150px] object-contain m-2" src={pulley} alt="Pulley" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
