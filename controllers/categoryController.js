const Category = require("../models/categoryModel");

exports.createCategory = async (req, res) => {
  const category = new Category({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await category.save();
    res.status(201).send(category);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getCategories = async (req, res) => {
  try {
    await req.user.populate("categories");
    res.send(req.user.categories);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};

exports.updateCategory = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const category = await Category.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!category) {
      return res.status(404).send();
    }

    updates.forEach((update) => (category[update] = req.body[update]));
    await category.save();
    res.send(category);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!category) {
      return res.status(404).send();
    }

    res.send(category);
  } catch (e) {
    res.status(500).send();
  }
};
