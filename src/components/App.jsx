import React, { useState } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Data = [
  {
    names: "King Bed Frame",
    id: "KingBedFrame",
    category: "Bedroom",
    l: 2.05,
    w: 1.96,
    h: 1.38
  },
  {
    names: "Queen Bed Frame",
    id: "QueenBedFrame",
    category: "Bedroom",
    l: 2.05,
    w: 1.66,
    h: 1.38
  },
  {
    names: "Single Bed Frame",
    id: "SingleBedFrame",
    category: "Bedroom",
    l: 2.09,
    w: 1.06,
    h: 1.38
  },
  {
    names: "Bedside Table",
    id: "BedsideTable",
    category: "Bedroom",
    l: 0.52,
    w: 0.58,
    h: 0.4
  },
  {
    names: "Bunk Bed",
    id: "BunkBed",
    category: "Bedroom",
    l: 2.07,
    w: 0.93,
    h: 2
  },
  {
    names: "Chest of Drawers",
    id: "Chest",
    category: "Bedroom",
    l: 0.4,
    w: 0.48,
    h: 0.55
  },
  {
    names: "Dressing Table",
    id: "DressingTable",
    category: "Bedroom",
    l: 1,
    w: 0.48,
    h: 0.55
  },
  {
    names: "King Mattress",
    id: "KingMattress",
    category: "Bedroom",
    l: 2,
    w: 1.8,
    h: 0.24
  },
  {
    names: "Queen Mattress",
    id: "QueenMattress",
    category: "Bedroom",
    l: 2,
    w: 1.5,
    h: 0.24
  },
  {
    names: "Single Mattress",
    id: "SingleMattress",
    category: "Bedroom",
    l: 2,
    w: 0.9,
    h: 0.24
  },
  {
    names: "Mirror",
    id: "Mirror",
    category: "Bedroom",
    l: 0.78,
    w: 0.05,
    h: 1.96
  },
  {
    names: "Wardrobe",
    id: "Wardrobe",
    category: "Bedroom",
    l: 1.5,
    w: 0.66,
    h: 2
  },
  {
    names: "Armchair",
    id: "Armchair",
    category: "Living Room",
    l: 0.63,
    w: 0.76,
    h: 0.74
  },
  {
    names: "Bookcase",
    id: "Bookcase",
    category: "Living Room",
    l: 0.9,
    w: 0.4,
    h: 1.9
  },
  {
    names: "Coffee Table",
    id: "CoffeeTable",
    category: "Living Room",
    l: 1.2,
    w: 0.89,
    h: 0.43
  },
  {
    names: "Day Bed",
    id: "DayBed",
    category: "Living Room",
    l: 1.9,
    w: 0.81,
    h: 0.6
  },
  {
    names: "Display Cabinet",
    id: "DisplayCabinet",
    category: "Living Room",
    l: 1,
    w: 0.5,
    h: 2
  },
  {
    names: "Flat Screen TV",
    id: "FlatScreenTV",
    category: "Living Room",
    l: 1.1,
    w: 0.24,
    h: 0.68
  },
  {
    names: "Footstool",
    id: "Footstool",
    category: "Living Room",
    l: 0.38,
    w: 0.39,
    h: 0.39
  },
  {
    names: "Recliner",
    id: "Recliner",
    category: "Living Room",
    l: 0.71,
    w: 1.04,
    h: 1.05
  },
  {
    names: "Rocking Chair",
    id: "RockingChair",
    category: "Living Room",
    l: 0.68,
    w: 0.94,
    h: 0.95
  },
  {
    names: "Rug",
    id: "Rug",
    category: "Living Room",
    l: 1.82,
    w: 0.4,
    h: 0.4
  },
  {
    names: "Shoe Cabinet",
    id: "ShoeCabinet",
    category: "Living Room",
    l: 0.8,
    w: 0.32,
    h: 1.18
  },
  {
    names: "Side Table",
    id: "SideTable",
    category: "Living Room",
    l: 0.43,
    w: 0.48,
    h: 0.66
  },
  {
    names: "Sofa - 2 Seater",
    id: "Sofa2Seater",
    category: "Living Room",
    l: 0.91,
    w: 1.5,
    h: 0.83
  },
  {
    names: "Sofa - 3 Seater",
    id: "Sofa3Seater",
    category: "Living Room",
    l: 0.94,
    w: 2.4,
    h: 0.85
  },
  {
    names: "Sofa - L Shaped",
    id: "SofaLShaped",
    category: "Living Room",
    l: 1,
    w: 2.5,
    h: 0.74
  },
  {
    names: "TV Console",
    id: "TVConsole",
    category: "Living Room",
    l: 1.8,
    w: 0.42,
    h: 0.4
  },
  {
    names: "Wall Art",
    id: "WallArt",
    category: "Living Room",
    l: 0.66,
    w: 0.51,
    h: 0.03
  },
  {
    names: "Wine Rack",
    id: "WineRack",
    category: "Living Room",
    l: 0.54,
    w: 0.35,
    h: 0.84
  },
  {
    names: "Bar Stool",
    id: "BarStool",
    category: "Kitchen & Dining",
    l: 0.38,
    w: 0.36,
    h: 0.76
  },
  {
    names: "Base Cabinet",
    id: "BaseCabinet",
    category: "Kitchen & Dining",
    l: 0.81,
    w: 0.6,
    h: 0.85
  },
  {
    names: "Bench",
    id: "Bench",
    category: "Kitchen & Dining",
    l: 1.05,
    w: 0.35,
    h: 0.45
  },
  {
    names: "Dining Chair",
    id: "DiningChair",
    category: "Kitchen & Dining",
    l: 0.96,
    w: 0.5,
    h: 0.5
  },
  {
    names: "Dining Table",
    id: "DiningTable",
    category: "Kitchen & Dining",
    l: 1.5,
    w: 1.05,
    h: 0.9
  },
  {
    names: "High Chair",
    id: "HighChair",
    category: "Kitchen & Dining",
    l: 0.51,
    w: 0.54,
    h: 0.93
  },
  {
    names: "Sideboard",
    id: "Sideboard",
    category: "Kitchen & Dining",
    l: 1.45,
    w: 0.48,
    h: 0.92
  },
  {
    names: "Stool",
    id: "Stool",
    category: "Kitchen & Dining",
    l: 0.38,
    w: 0.38,
    h: 0.75
  },
  {
    names: "Chest Freezer",
    id: "ChestFreezer",
    category: "Appliances",
    l: 1.47,
    w: 0.74,
    h: 0.84
  },
  {
    names: "Dishwasher",
    id: "Dishwasher",
    category: "Appliances",
    l: 0.6,
    w: 0.55,
    h: 0.53
  },
  {
    names: "Dryer",
    id: "Dryer",
    category: "Appliances",
    l: 0.6,
    w: 0.65,
    h: 0.85
  },
  {
    names: "Microwave",
    id: "Microwave",
    category: "Appliances",
    l: 0.35,
    w: 0.6,
    h: 0.5
  },
  {
    names: "Mini Fridge",
    id: "MiniFridge",
    category: "Appliances",
    l: 0.75,
    w: 0.48,
    h: 0.45
  },
  {
    names: "Oven",
    id: "Oven",
    category: "Appliances",
    l: 0.6,
    w: 0.57,
    h: 0.6
  },
  {
    names: "Refrigerator",
    id: "Refrigerator",
    category: "Appliances",
    l: 1.68,
    w: 0.75,
    h: 0.75
  },
  {
    names: "Vacuum Cleaner",
    id: "VacuumCleaner",
    category: "Appliances",
    l: 0.43,
    w: 0.36,
    h: 0.3
  },
  {
    names: "Washing Machine",
    id: "WashingMachine",
    category: "Appliances",
    l: 0.56,
    w: 0.6,
    h: 0.89
  },
  {
    names: "Grill",
    id: "Grill",
    category: "Outdoor",
    l: 0.58,
    w: 0.46,
    h: 0.88
  },
  {
    names: "Patio Chair",
    id: "PatioChair",
    category: "Outdoor",
    l: 0.6,
    w: 0.6,
    h: 0.86
  },
  {
    names: "Patio Table",
    id: "PatioTable",
    category: "Outdoor",
    l: 2,
    w: 0.75,
    h: 0.8
  },
  {
    names: "Patio Umbrella",
    id: "PatioUmbrella",
    category: "Outdoor",
    l: 0.6,
    w: 1.57,
    h: 0.35
  },
  {
    names: "Picnic Table",
    id: "PicnicTable",
    category: "Outdoor",
    l: 1.53,
    w: 0.72,
    h: 0.73
  },
  {
    names: "Sun Lounger",
    id: "SunLounger",
    category: "Outdoor",
    l: 1.99,
    w: 0.71,
    h: 0.33
  },
  {
    names: "Bicycle",
    id: "Bicycle",
    category: "Sports",
    l: 1.75,
    w: 0.1,
    h: 0.7
  },
  {
    names: "Elliptical",
    id: "Elliptical",
    category: "Sports",
    l: 0.6,
    w: 2,
    h: 1.75
  },
  {
    names: "Exercise Bike",
    id: "ExerciseBike",
    category: "Sports",
    l: 1.03,
    w: 0.55,
    h: 0.75
  },
  {
    names: "Surfboard",
    id: "Surfboard",
    category: "Sports",
    l: 0.4,
    w: 0.03,
    h: 2.3
  },
  {
    names: "Treadmill",
    id: "Treadmill",
    category: "Sports",
    l: 0.85,
    w: 1.78,
    h: 1.4
  },
  {
    names: "Conference Table",
    id: "ConferenceTable",
    category: "Office",
    l: 3.8,
    w: 1.2,
    h: 1.2
  },
  {
    names: "Cupboard",
    id: "Cupboard",
    category: "Office",
    l: 0.92,
    w: 0.5,
    h: 1.83
  },
  {
    names: "Desk",
    id: "Desk",
    category: "Office",
    l: 1,
    w: 0.5,
    h: 0.75
  },
  {
    names: "Desktop Computer",
    id: "DesktopComputer",
    category: "Office",
    l: 0.3,
    w: 0.15,
    h: 0.35
  },
  {
    names: "Desktop Monitor",
    id: "DesktopMonitor",
    category: "Office",
    l: 0.2,
    w: 0.65,
    h: 0.55
  },
  {
    names: "File Cabinet - 2 Drawers",
    id: "FileCabinet2Drawers",
    category: "Office",
    l: 0.5,
    w: 0.41,
    h: 0.72
  },
  {
    names: "File Cabinet - 3 Drawers",
    id: "FileCabinet3Drawers",
    category: "Office",
    l: 0.5,
    w: 0.41,
    h: 1.04
  },
  {
    names: "Office Chair",
    id: "OfficeChair",
    category: "Office",
    l: 0.52,
    w: 0.65,
    h: 1.1
  },
  {
    names: "Printer",
    id: "Printer",
    category: "Office",
    l: 0.55,
    w: 0.43,
    h: 0.23
  },
  {
    names: "Reception Counter",
    id: "ReceptionCounter",
    category: "Office",
    l: 1.05,
    w: 0.29,
    h: 0.73
  },
  {
    names: "Whiteboard",
    id: "Whiteboard",
    category: "Office",
    l: 1.88,
    w: 1.86,
    h: 0.56
  },
  {
    names: "Workstation",
    id: "Workstation",
    category: "Office",
    l: 1.5,
    w: 0.75,
    h: 1.2
  },
  {
    names: "Document Box",
    id: "DocumentBox",
    category: "Misc.",
    l: 0.4,
    w: 0.31,
    h: 0.32
  },
  {
    names: "Standard Box",
    id: "StandardBox",
    category: "Misc.",
    l: 0.6,
    w: 0.34,
    h: 0.4
  },
  {
    names: "Crib",
    id: "Crib",
    category: "Misc.",
    l: 1.25,
    w: 0.67,
    h: 0.86
  },
  {
    names: "Fan",
    id: "Fan",
    category: "Misc.",
    l: 0.42,
    w: 0.51,
    h: 1.35
  },
  {
    names: "Floor Lamp",
    id: "FloorLamp",
    category: "Misc.",
    l: 0.56,
    w: 0.56,
    h: 1.8
  },
  {
    names: "Piano - Small",
    id: "PianoSmall",
    category: "Misc.",
    l: 1.55,
    w: 1.55,
    h: 1
  },
  {
    names: "Piano - Grand",
    id: "PianoGrand",
    category: "Misc.",
    l: 1.55,
    w: 2,
    h: 1.02
  },
  {
    names: "Safe - Small",
    id: "SafeSmall",
    category: "Misc.",
    l: 0.45,
    w: 0.45,
    h: 0.5
  },
  {
    names: "Safe - Large",
    id: "SafeLarge",
    category: "Misc.",
    l: 0.6,
    w: 0.5,
    h: 0.8
  },
  {
    names: "Carryon Suitcase",
    id: "CarryonSuitcase",
    category: "Misc.",
    l: 0.36,
    w: 0.24,
    h: 0.55
  },
  {
    names: "Suitcase",
    id: "Suitcase",
    category: "Misc.",
    l: 0.54,
    w: 0.33,
    h: 0.77
  },
  {
    names: "Table Lamp",
    id: "TableLamp",
    category: "Misc.",
    l: 0.35,
    w: 0.35,
    h: 0.66
  }
]

const tabs = [
  {
    tab: 'Bedroom'
  },
  {
    tab: 'Living Room'
  },
  {
    tab: 'Kitchen & Dining'
  },
  {
    tab: 'Appliances'
  },
  {
    tab: 'Outdoor'
  },
  {
    tab: 'Sports'
  },
  {
    tab: 'Office'
  },
  {
    tab: 'Misc.'
  }
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
      if (values[Data[i].id] > 0) {
        lst.push("(" + values[Data[i].id] + "x) " + Data[i].names)
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
  const vols = [];

  for (var i = 0; i < Data.length; i++) {
    spaces.push(Math.ceil(values[Data[i].id] * Data[i].l * Data[i].h))
    vols.push(Math.ceil(values[Data[i].id] * Data[i].l * Data[i].w * Data[i].h))
  };

  const spaceNeeded = spaces.reduce((partialSum, a) => partialSum + a, 0);
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
          <Tabs defaultActiveKey='Bedroom'>
            {
              tabs.map(({ tab }) => {
                return (
                  <Tab eventKey={tab} title={tab}>
                    <div className='container container__items'>
                      {
                        Data.map(({ names, id, category, l, w, h }) => {
                          return (
                            <>
                              {category === tab ?
                                <div key={id} className='container__item'>
                                  <input
                                    type='number'
                                    min='0'
                                    value={values[id]}
                                    onChange={handleChange}
                                    name={id}
                                    label={id}
                                  />
                                  <label for={names}>
                                    <b>{names}</b>
                                  </label>
                                  <div>L: {Math.round(l * 100)} W: {Math.round(w * 100)} H: {Math.round(h * 100)}</div>
                                </div>
                                : null}
                            </>
                          )
                        })
                      }
                    </div>
                  </Tab>
                )
              })
            }
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default App