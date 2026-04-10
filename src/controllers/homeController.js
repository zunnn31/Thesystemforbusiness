let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
//object phai co key va value

let getAboutpage = (req, res) => {
    return res.render('test/about.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutpage: getAboutpage,
}