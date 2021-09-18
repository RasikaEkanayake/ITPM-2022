const router = require("express").Router();
const Package = require("../models/Package");

/*Router for get all Packages*/
router.get("/", async (req, res) => {

    await Package.find()
        .then(packages => res.send(packages))
        .catch(err => res.status(400).send('Error: ' + err))

});

/*Router for get Package by Id*/
router.get("/:id", async (req, res) => {

    await Package.findById(req.params.id)
        .then((package) => res.send(package))
        .catch(err => res.status(400).send("Error : " + err))

});

/*Router for create Package*/
router.post('/AddPackage', async (req, res) => {

    const packageName = req.body.packageName;
    const packageId = req.body.packageId;

    let packageExist = await Package.findOne({
        packageName: packageName,
    });

    if (packageExist)
        return res.status(404).send("Package already created!");

    let idExist = await Package.findOne({
        packageId: packageId,
    });

    if (idExist)
        return res.status(404).send("Package ID already in use!");

    let image = req.files.photo;

    let urlPrefix = "http://localhost:8092/static/images";
    let imageName = Date.now() + "-" + image.name;

    image.mv("./public/images/Packages/" + imageName, (err, result) => {
        if (err) return res.status(400).send("Error : " + err);
    });

    let imageURL = urlPrefix + "/Packages/" + imageName;

    let package = new Package({
        packageName: req.body.packageName,
        packageId: req.body.packageId,
        price: req.body.price,
        discount: req.body.discount,
        description: req.body.description,
        imageURL
    });

    try {
        await package.save();
        res.send(package);
    } catch (err) {
        console.log(err);
        res.status(400).send('Error: ' + err);
    }

});

/*Router for delete package*/
router.delete("/DeletePackage/:id", async (req, res) => {

    await Package.findByIdAndDelete(req.params.id)
        .then(() => res.send("Package Deleted Successfully!"))
        .catch(err => res.status(400).send("Error : " + err));

});

/*Router for update package*/
router.put("/UpdatePackage/:id", async (req, res) => {

    let imageURL;
    if (req.body.isImageUpdated === "true") {

        let image = req.files.photo;

        let urlPrefix = "http://localhost:8092/static/images";
        let imageName = Date.now() + "-" + image.name;

        image.mv("./public/images/Packages/" + imageName, (err, result) => {
            if (err) return res.status(400).send("Error : " + err);
        });

        imageURL = urlPrefix + "/Packages/" + imageName;
    }

    await Package.findById(req.params.id)
        .then(package => {
            package.packageName = req.body.packageName;
            package.packageId = req.body.packageId;
            package.price = req.body.price;
            package.discount = req.body.discount;
            package.description = req.body.description;
            if (req.body.isImageUpdated === "true") {
                package.imageURL = imageURL;
            }

            package.save()
                .then(() => res.send("Package Updated Successfully!"))
                .catch(err => res.status(400).send('Error: ' + err));
        })
        .catch(err => res.status(400).send("Error : " + err));

});

module.exports = router;