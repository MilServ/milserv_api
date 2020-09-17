const Maker = require("../models/maker");

// Initial Routes for creating Veteran Applicant accounts. Will add read, remove, and update routes
// at a later date

exports.create = (req, res) => {
  const maker = new Maker(req.body);
  console.log(req.body);

  maker.save((err) => {
    if (err) returnres.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.list = (req, res) => {
  Maker.find({}).exec((err, data) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.lastList = (req, res) => {
  Maker.find({})
    .sort({ _id: -1 })
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};
// exports.read = (req, res) => {
//   const slug = req.params.slug.toLowerCase();
//   Veteran.findOne({ slug })
//     .populate("categories", "_id name slug")
//     .populate("tags", "_id name slug")
//     .populate("postedBy", "_id name username")
//     .select(
//       "_id title body slug mtitle mdesc categories tags postedBy createdAt updatedAt"
//     )
//     .exec((err, data) => {
//       if (err) {
//         return res.json({
//           error: errorHandler(err),
//         });
//       }
//       res.json(data);
//     });
// };

// exports.remove = (req, res) => {
//   const slug = req.params.slug.toLowerCase();
//   Veteran.findOneAndRemove({ slug }).exec((err, data) => {
//     if (err) {
//       return res.json({
//         error: errorHandler(err),
//       });
//     }
//     res.json({
//       message: "Blog deleted successfully",
//     });
//   });
// };

// exports.update = (req, res) => {
//   const slug = req.params.slug.toLowerCase();

//   Veteran.findOne({ slug }).exec((err, oldBlog) => {
//     if (err) {
//       return res.status(400).json({
//         error: errorHandler(err),
//       });
//     }

//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         // console.log(err);
//         return res.status(400).json({
//           error: "Image could not upload",
//         });
//       }

//       let slugBeforeMerge = oldBlog.slug;
//       oldBlog = _.merge(oldBlog, fields);
//       oldBlog.slug = slugBeforeMerge;

//       const { body, desc, categories, tags } = fields;

//       if (body) {
//         oldBlog.excerpt = smartTrim(body, 320, "", " ...");
//         oldBlog.desc = stripHtml(body.substring(0, 160));
//       }

//       if (categories) {
//         oldBlog.categories = categories.split(",");
//       }

//       if (tags) {
//         oldBlog.tags = tags.split(",");
//       }

//       if (files.photo) {
//         if (files.photo.size > 20000000) {
//           return res.status(400).json({
//             error: "Image should be less then 2mb in size",
//           });
//         }
//         oldBlog.photo.data = fs.readFileSync(files.photo.path);
//         oldBlog.photo.contentType = files.photo.type;
//       }

//       oldBlog.save((err, result) => {
//         if (err) {
//           return res.status(400).json({
//             error: errorHandler(err),
//           });
//         }
//         res.json(result);
//       });
//     });
//   });
// };
