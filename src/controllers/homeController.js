import db from '../models/index'
import CRUDServices from "../services/CRUDServices";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll({ raw: true });
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) { console.log(e) }
}
//object phai co key va value

let getAboutpage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutpage: getAboutpage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}