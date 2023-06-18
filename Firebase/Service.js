const { db } = require("./Config")

const { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, setDoc, increment,
    query,
    where
} = require("firebase/firestore")


const BharatCollectionRef = collection(db, "BharatSeva")


const Getdata = async (HID) => {
    const docRef = doc(db, "BharatSeva", HID);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

const Update_Records = async (req, res) => {
    const NewData = doc(db, "BharatSeva", req.body.HealthId)
    await updateDoc(NewData, req.body)
    res.status(200).json({ Status: "Successfull" })
}

const GetAllData = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.status(200).json({ status: "Success", Data: docSnap.data() })
    } else {
        res.status(200).json({ status: "Failed", message: "Could Not Find that Attribute" })
    }
}

const Update_No_Of_Views = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    await updateDoc(docRef, { "TotalNoOfViews": increment(1) })
    res.status(200).json({ status: "Success" })
}

const RecordsViewed = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    await updateDoc(docRef, { "RecordsViewed": increment(1) })
    res.status(200).json({ status: "Success" })
}

const HealthID_Created = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    await updateDoc(docRef, { "HealthID_Created": increment(1) })
    res.status(200).json({ status: "Success" })
}

const RecordsCreated = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    await updateDoc(docRef, { RecordsCreated: increment(1) })
    res.status(200).json({ status: "Success" })
}

const BioDV = async (req, res) => {
    const docRef = doc(db, "BharatSeva", req.headers.health_id);
    await updateDoc(docRef, { "BioDV": increment(1) })
    res.status(200).json({ status: "Success" })
}
const Default_Records = {
    Profile_Viewed: 0,
    Profile_Updated: 0,
    Records_Viewed: 0,
    Records_Created: 0,
    View_permission: "Yes",
    Email: "Every Events",
    LockedAccount: "No"
}

// Node Js Servers Goes Here
const HealthUser = async (req, res) => {
    const NewData = doc(db, "BharatSeva_User", req.body.Health_ID)
    const docSnap = await getDoc(NewData);
    await updateDoc(NewData, req.body)
    res.status(200).json({ Status: "Success" })
}
// Create Health Chnged Activity Records that will goe here
const HealthUser_Activity = async (req, res) => {
    const { id: Health_ID } = req.params
    try {
        await setDoc(doc(db, "BharatSeva_User", Health_ID, "Viewed_By", req.headers.id), { ...req.body, Time: new Date() })
        await setDoc(doc(db, "BharatSeva_User", Health_ID, "Modified_By", req.headers.id), { ...req.body, Time: new Date() })
        res.status(200).json({ status: "Success", Data: "Goes" })
    } catch (err) {
        console.log(err.message)
        res.status(200).json({ status: "Failed", Data: "Failed" })
    }

}

// GET HealthUSerActivityData
const HealthUser_ActivityData = async (req, res) => {
    const { id: Health_ID } = req.params
    let Modified_By = [], Viewed_By = []
    try {
        const n = await getDocs(collection(db, "BharatSeva_User", Health_ID, "Viewed_By"))
        const m = await getDocs(collection(db, "BharatSeva_User", Health_ID, "Modified_By"))
        n.forEach((doc) => {
            Viewed_By.push(doc.data())
        })
        m.forEach((doc) => {
            Modified_By.push(doc.data())
        })
        res.status(200).json({ status: "Success", Data: { Modified_By, Modified_Length: Modified_By.length, Viewed_By, Viewed_Length: Viewed_By.length } })
    } catch (err) {
        console.log(err.message)
        res.status(400).json({ status: "Failed", message: err.message })
    }
}


// Get HealthUser Data
const GET_HealthUser = async (req, res) => {
    const { id: Health_ID } = req.params
    const Newdata = doc(db, "BharatSeva_User", Health_ID)
    let docSnap = await getDoc(Newdata)
    if (!docSnap.exists()) {
        await setDoc(Newdata, Default_Records)
        docSnap = await getDoc(Newdata)
    }
    const ModifiedData = collection(db, "BharatSeva_User", Health_ID, "Modified_By")
    const querySnapShot = await getDocs(ModifiedData)
    let Datas
    querySnapShot.forEach((doc) => {
        Datas = doc.data()
        console.log(doc.data())
    })
    res.status(200).json({ status: "Success", Data: { ...docSnap.data(), ...Datas } })
}

// This One will fetch the data for Hospital Names
const Get_HealthCare_Names = async (req, res) => {
    let HealthCare_Names = []
    try {
        let Names = await getDocs(collection(db, "BharatSeva_HealthCare"))
        Names.forEach((doc) => {
            let name = doc.data()
            name = name.name
            HealthCare_Names.push(name)
        })
        res.status(200).json({ status: "Success", healthcares: HealthCare_Names, totalname: HealthCare_Names.length })
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message })
    }
}


module.exports = {
    Update_Records,
    GetAllData,
    Update_No_Of_Views,
    HealthID_Created,
    RecordsViewed,
    RecordsCreated,
    BioDV,


    // Node Js
    HealthUser,
    GET_HealthUser,
    Get_HealthCare_Names,
    HealthUser_Activity,
    HealthUser_ActivityData
} 