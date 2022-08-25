import React, { useState } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const Data = [
  ['King Bed Frame', 2.05, 1.38, 1.96, 'KingBedFrame'], //0, Bedroom
  ['Queen Bed Frame', 2.05, 1.38, 1.66, 'QueenBedFrame'],
  ['Single Bed Frame', 2.09, 1.38, 1.06, 'SingleBedFrame'],
  ['Bedside Table', 0.52, 0.4, 0.58, 'BedsideTable'],
  ['Bunk Bed', 2.07, 2, 0.93, 'BunkBed'],
  ['Chest of Drawers', 0.4, 0.55, 0.48, 'Chest'],
  ['Dressing Table', 1, 0.55, 0.48, 'DressingTable'],
  ['King Mattress', 2, 0.24, 1.8, 'KingMattress'],
  ['Queen Mattress', 2, 0.24, 1.5, 'QueenMattress'],
  ['Single Mattress', 2, 0.24, 0.9, 'SingleMattress'],
  ['Mirror', 0.78, 1.96, 0.05, 'Mirror'],
  ['Wardrobe', 1.5, 2, 0.66, 'Wardrobe'],
  ['Armchair', 0.63, 0.74, 0.76, 'Armchair'], //12 Living Room
  ['Bookcase', 0.9, 1.9, 0.4, 'Bookcase'],
  ['Coffee Table', 1.2, 0.43, 0.89, 'CoffeeTable'],
  ['Day Bed', 1.9, 0.6, 0.81, 'DayBed'],
  ['Display Cabinet', 1, 2, 0.5, 'DisplayCabinet'],
  ['Flat Screen TV', 1.1, 0.68, 0.24, 'FlatScreenTV'],
  ['Footstool', 0.38, 0.39, 0.39, 'Footstool'],
  ['Recliner', 0.71, 1.05, 1.04, 'Recliner'],
  ['Rocking Chair', 0.68, 0.95, 0.94, 'RockingChair'],
  ['Rug', 1.82, 0.4, 0.4, 'Rug'],
  ['Shoe Cabinet', 0.8, 1.18, 0.32, 'ShoeCabinet'],
  ['Side Table', 0.43, 0.66, 0.48, 'SideTable'],
  ['Sofa - 2 Seater', 0.91, 0.83, 1.5, 'Sofa2Seater'],
  ['Sofa - 3 Seater', 0.94, 0.85, 1.88, 'Sofa3Seater'],
  ['Sofa - L Shaped', 1, 0.74, 2.5, 'SofaLShaped'],
  ['TV Console', 1.8, 0.4, 0.42, 'TVConsole'],
  ['Wall Art', 0.66, 0.03, 0.51, 'WallArt'],
  ['Wine Rack', 0.54, 0.84, 0.35, 'WineRack'],
  ['Bar Stool', 0.38, 0.76, 0.36, 'BarStool'], //30 Kitchen & Dining
  ['Base Cabinet', 0.81, 0.85, 0.6, 'BaseCabinet'],
  ['Bench', 1.05, 0.45, 0.35, 'Bench'],
  ['Dining Chair', 0.96, 0.5, 0.5, 'DiningChair'],
  ['Dining Table', 1.5, 0.9, 1.05, 'DiningTable'],
  ['High Chair', 0.51, 0.93, 0.54, 'HighChair'],
  ['Sideboard', 1.45, 0.92, 0.48, 'Sideboard'],
  ['Stool', 0.38, 0.75, 0.38, 'Stool'],
  ['Chest Freezer', 1.47, 0.84, 0.74, 'ChestFreezer'], //38 Appliances
  ['Dishwasher', 0.6, 0.53, 0.55, 'Dishwasher'],
  ['Dryer', 0.6, 0.85, 0.65, 'Dryer'],
  ['Microwave', 0.35, 0.5, 0.6, 'Microwave'],
  ['Mini Fridge', 0.75, 0.45, 0.48, 'MiniFridge'],
  ['Oven', 0.6, 0.6, 0.57, 'Oven'],
  ['Refrigerator', 1.68, 0.75, 0.75, 'Refrigerator'],
  ['Vacuum Cleaner', 0.43, 0.3, 0.36, 'VacuumCleaner'],
  ['Washing Machine', 0.56, 0.89, 0.6, 'WashingMachine'],
  ['Grill', 0.58, 0.88, 0.46, 'Grill'], //47 Outdoor
  ['Patio Chair', 0.6, 0.86, 0.6, 'PatioChair'],
  ['Patio Table', 2, 0.8, 0.75, 'PatioTable'],
  ['Patio Umbrella', 0.6, 0.35, 1.57, 'PatioUmbrella'],
  ['Picnic Table', 1.53, 0.73, 0.72, 'PicnicTable'],
  ['Sun Lounger', 1.99, 0.33, 0.71, 'SunLounger'],
  ['Bicycle', 1.75, 0.7, 0.1, 'Bicycle'], //53 Sports
  ['Elliptical', 0.6, 1.75, 2, 'Elliptical'],
  ['Exercise Bike', 1.03, 0.75, 0.55, 'ExerciseBike'],
  ['Surfboard', 0.4, 2.3, 0.03, 'Surfboard'],
  ['Treadmill', 0.85, 1.4, 1.78, 'Treadmill'],
  ['Conference Table', 3.8, 1.2, 1.2, 'ConferenceTable'], //58 Office
  ['Cupboard', 0.92, 1.83, 0.5, 'Cupboard'],
  ['Desk', 1, 0.75, 0.5, 'Desk'],
  ['Desktop Computer', 0.3, 0.35, 0.15, 'DesktopComputer'],
  ['Desktop Monitor', 0.2, 0.55, 0.65, 'DesktopMonitor'],
  ['File Cabinet - 2 Drawers', 0.5, 0.72, 0.41, 'FileCabinet2Drawers'],
  ['File Cabinet - 3 Drawers', 0.5, 1.04, 0.41, 'FileCabinet3Drawers'],
  ['Office Chair', 0.52, 1.1, 0.65, 'OfficeChair'],
  ['Printer', 0.55, 0.23, 0.43, 'Printer'],
  ['Reception Counter', 1.05, 0.73, 0.29, 'ReceptionCounter'],
  ['Whiteboard', 1.88, 0.56, 1.86, 'Whiteboard'],
  ['Workstation', 1.5, 1.2, 0.75, 'Workstation'],
  ['Document Box', 0.4, 0.32, 0.31, 'DocumentBox'], //70 Misc.
  ['Standard Box', 0.6, 0.4, 0.34, 'StandardBox'],
  ['Crib', 1.25, 0.86, 0.67, 'Crib'],
  ['Fan', 0.42, 1.35, 0.51, 'Fan'],
  ['Floor Lamp', 0.56, 1.8, 0.56, 'FloorLamp'],
  ['Piano - Small', 1.55, 1, 1.55, 'PianoSmall'],
  ['Piano - Grand', 1.55, 1.02, 2, 'PianoGrand'],
  ['Safe - Small', 0.45, 0.5, 0.45, 'SafeSmall'],
  ['Safe - Large', 0.6, 0.8, 0.5, 'SafeLarge'],
  ['Carryon Suitcase', 0.36, 0.55, 0.24, 'CarryonSuitcase'],
  ['Suitcase', 0.54, 0.77, 0.33, 'Suitcase'],
  ['Table Lamp', 0.35, 0.66, 0.35, 'TableLamp']
]

const initialValues = {
  KingBedFrame: 0,
  QueenBedFrame: 0,
  SingleBedFrame: 0,
  BedsideTable: 0,
  BunkBed: 0,
  Chest: 0,
  DressingTable: 0,
  KingMattress: 0,
  QueenMattress: 0,
  SingleMattress: 0,
  Mirror: 0,
  Wardrobe: 0,
  Armchair: 0,
  Bookcase: 0,
  CoffeeTable: 0,
  DayBed: 0,
  DisplayCabinet: 0,
  FlatScreenTV: 0,
  Footstool: 0,
  Recliner: 0,
  RockingChair: 0,
  Rug: 0,
  ShoeCabinet: 0,
  SideTable: 0,
  Sofa2Seater: 0,
  Sofa3Seater: 0,
  SofaLShaped: 0,
  TVConsole: 0,
  WallArt: 0,
  WineRack: 0,
  BarStool: 0,
  BaseCabinet: 0,
  Bench: 0,
  DiningChair: 0,
  DiningTable: 0,
  HighChair: 0,
  Sideboard: 0,
  Stool: 0,
  ChestFreezer: 0,
  Dishwasher: 0,
  Dryer: 0,
  Microwave: 0,
  MiniFridge: 0,
  Oven: 0,
  Refrigerator: 0,
  VacuumCleaner: 0,
  WashingMachine: 0,
  Grill: 0,
  PatioChair: 0,
  PatioTable: 0,
  PatioUmbrella: 0,
  PicnicTable: 0,
  SunLounger: 0,
  Bicycle: 0,
  Elliptical: 0,
  ExerciseBike: 0,
  Surfboard: 0,
  Treadmill: 0,
  ConferenceTable: 0,
  Cupboard: 0,
  Desk: 0,
  DesktopComputer: 0,
  DesktopMonitor: 0,
  FileCabinet2Drawers: 0,
  FileCabinet3Drawers: 0,
  OfficeChair: 0,
  Printer: 0,
  ReceptionCounter: 0,
  Whiteboard: 0,
  Workstation: 0,
  DocumentBox: 0,
  StandardBox: 0,
  Crib: 0,
  Fan: 0,
  FloorLamp: 0,
  PianoSmall: 0,
  PianoGrand: 0,
  SafeSmall: 0,
  SafeLarge: 0,
  CarryonSuitcase: 0,
  Suitcase: 0,
  TableLamp: 0
}

function App() {

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  function displayList() {
    const lst = []
    for (var i = 0; i < Data.length; i++) {
      if (values[Data[i][4]] > 0) {
        lst.push("(" + values[Data[i][4]] + "x) " + Data[i][0])
      }
    }
    return lst;
  }

  function recSize(volNeeded) {
    if (volNeeded < 2) {
      return ([5])
    } else if (volNeeded < 5) {
      return ([5, 10])
    } else if (volNeeded < 10) {
      return ([10, 20])
    } else if (volNeeded < 20) {
      return ([20, 30])
    } else if (volNeeded < 30) {
      return ([30, 40])
    }
    else return ([40])
  }

  const spaces = [];
  for (var i = 0; i < Data.length; i++) { spaces.push(Math.ceil(values[Data[i][4]] * Data[i][1] * Data[i][3])) };
  const spaceNeeded = spaces.reduce((partialSum, a) => partialSum + a, 0);

  const vols = [];
  for (var i = 0; i < Data.length; i++) { vols.push(Math.ceil(values[Data[i][4]] * Data[i][1] * Data[i][2] * Data[i][3])) };
  const volNeeded = vols.reduce((partialSum, a) => partialSum + a, 0);

  return (
    <div className='App'>
      <h2 class='text-center'>Find The Size That You Need</h2>
      <p class='text-center'>Fill in the items that you plan to put into storage to get a size estimate</p>
      <div className='items'>
        <div class='card-columns'>
          <div class='card'>
            <div class='card-header'>
              <h5>List of Items:</h5>
            </div>
            <div class='card-body'>
              {displayList().map(i => <p>{i}</p>)}
              <a href='/'>
                <small>{spaceNeeded > 0 ? "clear list" : ""}</small>
              </a>
            </div>
            <div class='card-footer'>
              <p>
                <span className='left'><b>Est. Space Needed:</b></span><span className='right'>{spaceNeeded} sqm</span><br />
                <span className='left'><b>Est. Volume:</b></span><span className='right'>{volNeeded} cbm</span>
              </p>
            </div>
          </div>
          <div class='card'>
            <div class='card-header'>
              <h6>Recommended Storage Sizes:</h6>
            </div>
            <div className='sizedesc'>
              {recSize(volNeeded).map(k => <p>{k} cbm</p>)}
              <p class="card-text"><small class="text-muted">Actual storage size may vary depending on item stackability</small></p>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultActiveKey="bedroom">
            <Tab eventKey="bedroom" title="Bedroom">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={values.KingBedFrame}
                        onChange={handleChange}
                        name="KingBedFrame"
                        label="KingBedFrame" />
                      <label for="KingBedFrame">{Data[0][0]}: W: {Math.round(Data[0][1] * 100)}cm, H: {Math.round(Data[0][2] * 100)}cm, D: {Math.round(Data[0][3] * 100)}cm</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={values.QueenBedFrame}
                        onChange={handleChange}
                        name="QueenBedFrame"
                        label="QueenBedFrame" />
                      <label for="QueenBedFrame">{Data[1][0]}: W: {Math.round(Data[1][1] * 100)}cm, H: {Math.round(Data[1][2] * 100)}cm, D: {Math.round(Data[1][3] * 100)}cm</label>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={values.SingleBedFrame}
                        onChange={handleChange}
                        name="SingleBedFrame"
                        label="SingleBedFrame" />
                      <label for="SingleBedFrame">{Data[2][0]}: W: {Math.round(Data[2][1] * 100)}cm, H: {Math.round(Data[2][2] * 100)}cm, D: {Math.round(Data[2][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.BedsideTable}
                      onChange={handleChange}
                      name="BedsideTable"
                      label="BedsideTable" />
                      <label for="BedsideTable">{Data[3][0]}: W: {Math.round(Data[3][1] * 100)}cm, H: {Math.round(Data[3][2] * 100)}cm, D: {Math.round(Data[3][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.BunkBed}
                      onChange={handleChange}
                      name="BunkBed"
                      label="BunkBed" />
                      <label for="BunkBed">{Data[4][0]}: W: {Math.round(Data[4][1] * 100)}cm, H: {Math.round(Data[4][2] * 100)}cm, D: {Math.round(Data[4][3] * 100)}cm</label></td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Chest}
                      onChange={handleChange}
                      name="Chest"
                      label="Chest" />
                      <label for="Chest">{Data[5][0]}: W: {Math.round(Data[5][1] * 100)}cm, H: {Math.round(Data[5][2] * 100)}cm, D: {Math.round(Data[5][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DressingTable}
                      onChange={handleChange}
                      name="DressingTable"
                      label="DressingTable" />
                      <label for="DressingTable">{Data[6][0]}: W: {Math.round(Data[6][1] * 100)}cm, H: {Math.round(Data[6][2] * 100)}cm, D: {Math.round(Data[6][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.KingMattress}
                      onChange={handleChange}
                      name="KingMattress"
                      label="KingMattress" />
                      <label for="KingMattress">{Data[7][0]}: W: {Math.round(Data[7][1] * 100)}cm, H: {Math.round(Data[7][2] * 100)}cm, D: {Math.round(Data[7][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.QueenMattress}
                      onChange={handleChange}
                      name="QueenMattress"
                      label="QueenMattress" />
                      <label for="QueenMattress">{Data[8][0]}: W: {Math.round(Data[8][1] * 100)}cm, H: {Math.round(Data[8][2] * 100)}cm, D: {Math.round(Data[8][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SingleMattress}
                      onChange={handleChange}
                      name="SingleMattress"
                      label="SingleMattress" />
                      <label for="SingleMattress">{Data[9][0]}: W: {Math.round(Data[9][1] * 100)}cm, H: {Math.round(Data[9][2] * 100)}cm, D: {Math.round(Data[9][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Mirror}
                      onChange={handleChange}
                      name="Mirror"
                      label="Mirror" />
                      <label for="Mirror">{Data[10][0]}: W: {Math.round(Data[10][1] * 100)}cm, H: {Math.round(Data[10][2] * 100)}cm, D: {Math.round(Data[10][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Wardrobe}
                      onChange={handleChange}
                      name="Wardrobe"
                      label="Wardrobe" />
                      <label for="Wardrobe">{Data[11][0]}: W: {Math.round(Data[11][1] * 100)}cm, H: {Math.round(Data[11][2] * 100)}cm, D: {Math.round(Data[11][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="livingroom" title="Living Room">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Armchair}
                      onChange={handleChange}
                      name="Armchair"
                      label="Armchair" />
                      <label for="Armchair">{Data[12][0]}: W: {Math.round(Data[12][1] * 100)}cm, H: {Math.round(Data[12][2] * 100)}cm, D: {Math.round(Data[12][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SingleMattress}
                      onChange={handleChange}
                      name="SingleMattress"
                      label="SingleMattress" />
                      <label for="SingleMattress">{Data[13][0]}: W: {Math.round(Data[9][1] * 100)}cm, H: {Math.round(Data[9][2] * 100)}cm, D: {Math.round(Data[9][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.CoffeeTable}
                      onChange={handleChange}
                      name="CoffeeTable"
                      label="CoffeeTable" />
                      <label for="CoffeeTable">{Data[14][0]}: W: {Math.round(Data[14][1] * 100)}cm, H: {Math.round(Data[14][2] * 100)}cm, D: {Math.round(Data[14][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DayBed}
                      onChange={handleChange}
                      name="DayBed"
                      label="DayBed" />
                      <label for="DayBed">{Data[15][0]}: W: {Math.round(Data[15][1] * 100)}cm, H: {Math.round(Data[15][2] * 100)}cm, D: {Math.round(Data[15][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DisplayCabinet}
                      onChange={handleChange}
                      name="DisplayCabinet"
                      label="DisplayCabinet" />
                      <label for="DisplayCabinet">{Data[16][0]}: W: {Math.round(Data[16][1] * 100)}cm, H: {Math.round(Data[16][2] * 100)}cm, D: {Math.round(Data[16][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.FlatScreenTV}
                      onChange={handleChange}
                      name="FlatScreenTV"
                      label="FlatScreenTV" />
                      <label for="FlatScreenTV">{Data[17][0]}: W: {Math.round(Data[17][1] * 100)}cm, H: {Math.round(Data[17][2] * 100)}cm, D: {Math.round(Data[17][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Footstool}
                      onChange={handleChange}
                      name="Footstool"
                      label="Footstool" />
                      <label for="Footstool">{Data[18][0]}: W: {Math.round(Data[18][1] * 100)}cm, H: {Math.round(Data[18][2] * 100)}cm, D: {Math.round(Data[18][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Recliner}
                      onChange={handleChange}
                      name="Recliner"
                      label="Recliner" />
                      <label for="Recliner">{Data[19][0]}: W: {Math.round(Data[19][1] * 100)}cm, H: {Math.round(Data[19][2] * 100)}cm, D: {Math.round(Data[19][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.RockingChair}
                      onChange={handleChange}
                      name="RockingChair"
                      label="RockingChair" />
                      <label for="RockingChair">{Data[20][0]}: W: {Math.round(Data[20][1] * 100)}cm, H: {Math.round(Data[20][2] * 100)}cm, D: {Math.round(Data[20][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Rug}
                      onChange={handleChange}
                      name="Rug"
                      label="Rug" />
                      <label for="Rug">{Data[21][0]}: W: {Math.round(Data[21][1] * 100)}cm, H: {Math.round(Data[21][2] * 100)}cm, D: {Math.round(Data[21][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.ShoeCabinet}
                      onChange={handleChange}
                      name="ShoeCabinet"
                      label="ShoeCabinet" />
                      <label for="ShoeCabinet">{Data[22][0]}: W: {Math.round(Data[22][1] * 100)}cm, H: {Math.round(Data[22][2] * 100)}cm, D: {Math.round(Data[22][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SideTable}
                      onChange={handleChange}
                      name="SideTable"
                      label="SideTable" />
                      <label for="SideTable">{Data[23][0]}: W: {Math.round(Data[23][1] * 100)}cm, H: {Math.round(Data[23][2] * 100)}cm, D: {Math.round(Data[23][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Sofa2Seater}
                      onChange={handleChange}
                      name="Sofa2Seater"
                      label="Sofa2Seater" />
                      <label for="Sofa2Seater">{Data[24][0]}: W: {Math.round(Data[24][1] * 100)}cm, H: {Math.round(Data[24][2] * 100)}cm, D: {Math.round(Data[24][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Sofa3Seater}
                      onChange={handleChange}
                      name="Sofa3Seater"
                      label="Sofa3Seater" />
                      <label for="Sofa3Seater">{Data[25][0]}: W: {Math.round(Data[25][1] * 100)}cm, H: {Math.round(Data[25][2] * 100)}cm, D: {Math.round(Data[25][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SofaLShaped}
                      onChange={handleChange}
                      name="SofaLShaped"
                      label="SofaLShaped" />
                      <label for="SofaLShaped">{Data[26][0]}: W: {Math.round(Data[26][1] * 100)}cm, H: {Math.round(Data[26][2] * 100)}cm, D: {Math.round(Data[26][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.TVConsole}
                      onChange={handleChange}
                      name="TVConsole"
                      label="TVConsole" />
                      <label for="TVConsole">{Data[27][0]}: W: {Math.round(Data[27][1] * 100)}cm, H: {Math.round(Data[27][2] * 100)}cm, D: {Math.round(Data[27][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.WallArt}
                      onChange={handleChange}
                      name="WallArt"
                      label="WallArt" />
                      <label for="WallArt">{Data[28][0]}: W: {Math.round(Data[28][1] * 100)}cm, H: {Math.round(Data[28][2] * 100)}cm, D: {Math.round(Data[28][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.WineRack}
                      onChange={handleChange}
                      name="WineRack"
                      label="WineRack" />
                      <label for="WineRack">{Data[29][0]}: W: {Math.round(Data[29][1] * 100)}cm, H: {Math.round(Data[29][2] * 100)}cm, D: {Math.round(Data[29][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="kitchen" title="Kitchen & Dining">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.BarStool}
                      onChange={handleChange}
                      name="BarStool"
                      label="BarStool" />
                      <label for="BarStool">{Data[30][0]}: W: {Math.round(Data[30][1] * 100)}cm, H: {Math.round(Data[30][2] * 100)}cm, D: {Math.round(Data[30][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.BaseCabinet}
                      onChange={handleChange}
                      name="BaseCabinet"
                      label="BaseCabinet" />
                      <label for="BaseCabinet">{Data[31][0]}: W: {Math.round(Data[31][1] * 100)}cm, H: {Math.round(Data[31][2] * 100)}cm, D: {Math.round(Data[31][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Bench}
                      onChange={handleChange}
                      name="Bench"
                      label="Bench" />
                      <label for="Bench">{Data[32][0]}: W: {Math.round(Data[32][1] * 100)}cm, H: {Math.round(Data[32][2] * 100)}cm, D: {Math.round(Data[32][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DiningChair}
                      onChange={handleChange}
                      name="DiningChair"
                      label="DiningChair" />
                      <label for="DiningChair">{Data[33][0]}: W: {Math.round(Data[33][1] * 100)}cm, H: {Math.round(Data[33][2] * 100)}cm, D: {Math.round(Data[33][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DiningTable}
                      onChange={handleChange}
                      name="DiningTable"
                      label="DiningTable" />
                      <label for="DiningTable">{Data[34][0]}: W: {Math.round(Data[34][1] * 100)}cm, H: {Math.round(Data[34][2] * 100)}cm, D: {Math.round(Data[34][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.HighChair}
                      onChange={handleChange}
                      name="HighChair"
                      label="HighChair" />
                      <label for="HighChair">{Data[35][0]}: W: {Math.round(Data[35][1] * 100)}cm, H: {Math.round(Data[35][2] * 100)}cm, D: {Math.round(Data[35][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Sideboard}
                      onChange={handleChange}
                      name="Sideboard"
                      label="Sideboard" />
                      <label for="Sideboard">{Data[36][0]}: W: {Math.round(Data[36][1] * 100)}cm, H: {Math.round(Data[36][2] * 100)}cm, D: {Math.round(Data[36][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Stool}
                      onChange={handleChange}
                      name="Stool"
                      label="Stool" />
                      <label for="Stool">{Data[37][0]}: W: {Math.round(Data[37][1] * 100)}cm, H: {Math.round(Data[37][2] * 100)}cm, D: {Math.round(Data[37][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="appliances" title="Appliances">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.ChestFreezer}
                      onChange={handleChange}
                      name="ChestFreezer"
                      label="ChestFreezer" />
                      <label for="ChestFreezer">{Data[38][0]}: W: {Math.round(Data[38][1] * 100)}cm, H: {Math.round(Data[38][2] * 100)}cm, D: {Math.round(Data[38][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Dishwasher}
                      onChange={handleChange}
                      name="Dishwasher"
                      label="Dishwasher" />
                      <label for="Dishwasher">{Data[39][0]}: W: {Math.round(Data[39][1] * 100)}cm, H: {Math.round(Data[39][2] * 100)}cm, D: {Math.round(Data[39][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Dryer}
                      onChange={handleChange}
                      name="Dryer"
                      label="Dryer" />
                      <label for="Dryer">{Data[40][0]}: W: {Math.round(Data[40][1] * 100)}cm, H: {Math.round(Data[40][2] * 100)}cm, D: {Math.round(Data[40][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Microwave}
                      onChange={handleChange}
                      name="Microwave"
                      label="Microwave" />
                      <label for="Microwave">{Data[41][0]}: W: {Math.round(Data[41][1] * 100)}cm, H: {Math.round(Data[41][2] * 100)}cm, D: {Math.round(Data[41][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.MiniFridge}
                      onChange={handleChange}
                      name="MiniFridge"
                      label="MiniFridge" />
                      <label for="MiniFridge">{Data[42][0]}: W: {Math.round(Data[42][1] * 100)}cm, H: {Math.round(Data[42][2] * 100)}cm, D: {Math.round(Data[42][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Oven}
                      onChange={handleChange}
                      name="Oven"
                      label="Oven" />
                      <label for="Oven">{Data[43][0]}: W: {Math.round(Data[43][1] * 100)}cm, H: {Math.round(Data[43][2] * 100)}cm, D: {Math.round(Data[43][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Refrigerator}
                      onChange={handleChange}
                      name="Refrigerator"
                      label="Refrigerator" />
                      <label for="Refrigerator">{Data[44][0]}: W: {Math.round(Data[44][1] * 100)}cm, H: {Math.round(Data[44][2] * 100)}cm, D: {Math.round(Data[44][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.VacuumCleaner}
                      onChange={handleChange}
                      name="VacuumCleaner"
                      label="VacuumCleaner" />
                      <label for="VacuumCleaner">{Data[45][0]}: W: {Math.round(Data[45][1] * 100)}cm, H: {Math.round(Data[45][2] * 100)}cm, D: {Math.round(Data[45][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.WashingMachine}
                      onChange={handleChange}
                      name="WashingMachine"
                      label="WashingMachine" />
                      <label for="WashingMachine">{Data[46][0]}: W: {Math.round(Data[46][1] * 100)}cm, H: {Math.round(Data[46][2] * 100)}cm, D: {Math.round(Data[46][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="outdoor" title="Outdoor">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Grill}
                      onChange={handleChange}
                      name="Grill"
                      label="Grill" />
                      <label for="Grill">{Data[47][0]}: W: {Math.round(Data[47][1] * 100)}cm, H: {Math.round(Data[47][2] * 100)}cm, D: {Math.round(Data[47][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PatioChair}
                      onChange={handleChange}
                      name="PatioChair"
                      label="PatioChair" />
                      <label for="PatioChair">{Data[48][0]}: W: {Math.round(Data[48][1] * 100)}cm, H: {Math.round(Data[48][2] * 100)}cm, D: {Math.round(Data[48][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PatioTable}
                      onChange={handleChange}
                      name="PatioTable"
                      label="PatioTable" />
                      <label for="PatioTable">{Data[49][0]}: W: {Math.round(Data[49][1] * 100)}cm, H: {Math.round(Data[49][2] * 100)}cm, D: {Math.round(Data[49][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PatioUmbrella}
                      onChange={handleChange}
                      name="PatioUmbrella"
                      label="PatioUmbrella" />
                      <label for="PatioUmbrella">{Data[50][0]}: W: {Math.round(Data[50][1] * 100)}cm, H: {Math.round(Data[50][2] * 100)}cm, D: {Math.round(Data[50][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PicnicTable}
                      onChange={handleChange}
                      name="PicnicTable"
                      label="PicnicTable" />
                      <label for="PicnicTable">{Data[51][0]}: W: {Math.round(Data[51][1] * 100)}cm, H: {Math.round(Data[51][2] * 100)}cm, D: {Math.round(Data[51][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SunLounger}
                      onChange={handleChange}
                      name="SunLounger"
                      label="SunLounger" />
                      <label for="SunLounger">{Data[52][0]}: W: {Math.round(Data[52][1] * 100)}cm, H: {Math.round(Data[52][2] * 100)}cm, D: {Math.round(Data[52][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="sports" title="Sports">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Bicycle}
                      onChange={handleChange}
                      name="Bicycle"
                      label="Bicycle" />
                      <label for="Bicycle">{Data[53][0]}: W: {Math.round(Data[53][1] * 100)}cm, H: {Math.round(Data[53][2] * 100)}cm, D: {Math.round(Data[53][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Elliptical}
                      onChange={handleChange}
                      name="Elliptical"
                      label="Elliptical" />
                      <label for="Elliptical">{Data[54][0]}: W: {Math.round(Data[54][1] * 100)}cm, H: {Math.round(Data[54][2] * 100)}cm, D: {Math.round(Data[54][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.ExerciseBike}
                      onChange={handleChange}
                      name="ExerciseBike"
                      label="ExerciseBike" />
                      <label for="ExerciseBike">{Data[55][0]}: W: {Math.round(Data[55][1] * 100)}cm, H: {Math.round(Data[55][2] * 100)}cm, D: {Math.round(Data[55][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Surfboard}
                      onChange={handleChange}
                      name="Surfboard"
                      label="Surfboard" />
                      <label for="Surfboard">{Data[56][0]}: W: {Math.round(Data[56][1] * 100)}cm, H: {Math.round(Data[56][2] * 100)}cm, D: {Math.round(Data[56][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Treadmill}
                      onChange={handleChange}
                      name="Treadmill"
                      label="Treadmill" />
                      <label for="Treadmill">{Data[57][0]}: W: {Math.round(Data[57][1] * 100)}cm, H: {Math.round(Data[57][2] * 100)}cm, D: {Math.round(Data[57][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="office" title="Office">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.ConferenceTable}
                      onChange={handleChange}
                      name="ConferenceTable"
                      label="ConferenceTable" />
                      <label for="ConferenceTable">{Data[58][0]}: W: {Math.round(Data[58][1] * 100)}cm, H: {Math.round(Data[58][2] * 100)}cm, D: {Math.round(Data[58][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Cupboard}
                      onChange={handleChange}
                      name="Cupboard"
                      label="Cupboard" />
                      <label for="Cupboard">{Data[59][0]}: W: {Math.round(Data[59][1] * 100)}cm, H: {Math.round(Data[59][2] * 100)}cm, D: {Math.round(Data[59][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Desk}
                      onChange={handleChange}
                      name="Desk"
                      label="Desk" />
                      <label for="Desk">{Data[60][0]}: W: {Math.round(Data[60][1] * 100)}cm, H: {Math.round(Data[60][2] * 100)}cm, D: {Math.round(Data[60][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DesktopComputer}
                      onChange={handleChange}
                      name="DesktopComputer"
                      label="DesktopComputer" />
                      <label for="DesktopComputer">{Data[61][0]}: W: {Math.round(Data[61][1] * 100)}cm, H: {Math.round(Data[61][2] * 100)}cm, D: {Math.round(Data[61][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DesktopMonitor}
                      onChange={handleChange}
                      name="DesktopMonitor"
                      label="DesktopMonitor" />
                      <label for="DesktopMonitor">{Data[62][0]}: W: {Math.round(Data[62][1] * 100)}cm, H: {Math.round(Data[62][2] * 100)}cm, D: {Math.round(Data[62][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.FileCabinet2Drawers}
                      onChange={handleChange}
                      name="FileCabinet2Drawers"
                      label="FileCabinet2Drawers" />
                      <label for="FileCabinet2Drawers">{Data[63][0]}: W: {Math.round(Data[63][1] * 100)}cm, H: {Math.round(Data[63][2] * 100)}cm, D: {Math.round(Data[63][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.FileCabinet3Drawers}
                      onChange={handleChange}
                      name="FileCabinet3Drawers"
                      label="FileCabinet3Drawers" />
                      <label for="FileCabinet3Drawers">{Data[64][0]}: W: {Math.round(Data[64][1] * 100)}cm, H: {Math.round(Data[64][2] * 100)}cm, D: {Math.round(Data[64][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.OfficeChair}
                      onChange={handleChange}
                      name="OfficeChair"
                      label="OfficeChair" />
                      <label for="OfficeChair">{Data[65][0]}: W: {Math.round(Data[65][1] * 100)}cm, H: {Math.round(Data[65][2] * 100)}cm, D: {Math.round(Data[65][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Printer}
                      onChange={handleChange}
                      name="Printer"
                      label="Printer" />
                      <label for="Printer">{Data[66][0]}: W: {Math.round(Data[66][1] * 100)}cm, H: {Math.round(Data[66][2] * 100)}cm, D: {Math.round(Data[66][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.ReceptionCounter}
                      onChange={handleChange}
                      name="ReceptionCounter"
                      label="ReceptionCounter" />
                      <label for="ReceptionCounter">{Data[67][0]}: W: {Math.round(Data[67][1] * 100)}cm, H: {Math.round(Data[67][2] * 100)}cm, D: {Math.round(Data[67][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Whiteboard}
                      onChange={handleChange}
                      name="Whiteboard"
                      label="Whiteboard" />
                      <label for="Whiteboard">{Data[68][0]}: W: {Math.round(Data[68][1] * 100)}cm, H: {Math.round(Data[68][2] * 100)}cm, D: {Math.round(Data[68][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Workstation}
                      onChange={handleChange}
                      name="Workstation"
                      label="Workstation" />
                      <label for="Workstation">{Data[69][0]}: W: {Math.round(Data[69][1] * 100)}cm, H: {Math.round(Data[69][2] * 100)}cm, D: {Math.round(Data[69][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="misc" title="Misc.">
              <Table className="table table-borderless">
                <tbody>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.DocumentBox}
                      onChange={handleChange}
                      name="DocumentBox"
                      label="DocumentBox" />
                      <label for="DocumentBox">{Data[70][0]}: W: {Math.round(Data[70][1] * 100)}cm, H: {Math.round(Data[70][2] * 100)}cm, D: {Math.round(Data[70][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.StandardBox}
                      onChange={handleChange}
                      name="StandardBox"
                      label="StandardBox" />
                      <label for="StandardBox">{Data[71][0]}: W: {Math.round(Data[71][1] * 100)}cm, H: {Math.round(Data[71][2] * 100)}cm, D: {Math.round(Data[71][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Crib}
                      onChange={handleChange}
                      name="Crib"
                      label="Crib" />
                      <label for="Crib">{Data[72][0]}: W: {Math.round(Data[72][1] * 100)}cm, H: {Math.round(Data[72][2] * 100)}cm, D: {Math.round(Data[72][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Fan}
                      onChange={handleChange}
                      name="Fan"
                      label="Fan" />
                      <label for="Fan">{Data[73][0]}: W: {Math.round(Data[73][1] * 100)}cm, H: {Math.round(Data[73][2] * 100)}cm, D: {Math.round(Data[73][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.FloorLamp}
                      onChange={handleChange}
                      name="FloorLamp"
                      label="FloorLamp" />
                      <label for="FloorLamp">{Data[74][0]}: W: {Math.round(Data[74][1] * 100)}cm, H: {Math.round(Data[74][2] * 100)}cm, D: {Math.round(Data[74][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PianoSmall}
                      onChange={handleChange}
                      name="PianoSmall"
                      label="PianoSmall" />
                      <label for="PianoSmall">{Data[75][0]}: W: {Math.round(Data[75][1] * 100)}cm, H: {Math.round(Data[75][2] * 100)}cm, D: {Math.round(Data[75][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.PianoGrand}
                      onChange={handleChange}
                      name="PianoGrand"
                      label="PianoGrand" />
                      <label for="PianoGrand">{Data[76][0]}: W: {Math.round(Data[76][1] * 100)}cm, H: {Math.round(Data[76][2] * 100)}cm, D: {Math.round(Data[76][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SafeSmall}
                      onChange={handleChange}
                      name="SafeSmall"
                      label="SafeSmall" />
                      <label for="SafeSmall">{Data[77][0]}: W: {Math.round(Data[77][1] * 100)}cm, H: {Math.round(Data[77][2] * 100)}cm, D: {Math.round(Data[77][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.SafeLarge}
                      onChange={handleChange}
                      name="SafeLarge"
                      label="SafeLarge" />
                      <label for="SafeLarge">{Data[78][0]}: W: {Math.round(Data[78][1] * 100)}cm, H: {Math.round(Data[78][2] * 100)}cm, D: {Math.round(Data[78][3] * 100)}cm</label>
                    </td>
                  </tr>
                  <tr>
                    <td><input
                      type="number"
                      min="0"
                      value={values.CarryonSuitcase}
                      onChange={handleChange}
                      name="CarryonSuitcase"
                      label="CarryonSuitcase" />
                      <label for="CarryonSuitcase">{Data[79][0]}: W: {Math.round(Data[79][1] * 100)}cm, H: {Math.round(Data[79][2] * 100)}cm, D: {Math.round(Data[79][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.Suitcase}
                      onChange={handleChange}
                      name="Suitcase"
                      label="Suitcase" />
                      <label for="Suitcase">{Data[80][0]}: W: {Math.round(Data[80][1] * 100)}cm, H: {Math.round(Data[80][2] * 100)}cm, D: {Math.round(Data[80][3] * 100)}cm</label>
                    </td>
                    <td><input
                      type="number"
                      min="0"
                      value={values.TableLamp}
                      onChange={handleChange}
                      name="TableLamp"
                      label="TableLamp" />
                      <label for="TableLamp">{Data[81][0]}: W: {Math.round(Data[81][1] * 100)}cm, H: {Math.round(Data[81][2] * 100)}cm, D: {Math.round(Data[81][3] * 100)}cm</label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default App