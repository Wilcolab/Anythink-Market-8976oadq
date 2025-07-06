/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments for a specific post.
    * 
    * @route GET /api/comments
    * @query {string} postId - The ID of the post to retrieve comments for.
    * @returns {Object[]} 200 - An array of comment objects.
    * @returns {Object} 400 - Error object if postId is missing.
    * @returns {Object} 500 - Error object if server error occurs.
    */

 /**
    * DELETE /:commentId
    * Deletes a specific comment by its ID.
    * 
    * @route DELETE /api/comments/:commentId
    * @param {string} commentId - The ID of the comment to delete.
    * @returns {Object} 200 - Success message if comment is deleted.
    * @returns {Object} 400 - Error object if commentId is missing.
    * @returns {Object} 404 - Error object if comment is not found.
    * @returns {Object} 500 - Error object if server error occurs.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Route to get all comments for a specific post using async/await
router.get("/", async (req, res) => {
    const postId = req.query.postId;
    if (!postId) {
        return res.status(400).json({ error: "Post ID is required" });
    }

    try {
        const comments = await Comment.find({ postId: postId });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint for deleting a comment using async/await
router.delete("/:commentId", async (req, res) => {
    const commentId = req.params.commentId;
    if (!commentId) {
        return res.status(400).json({ error: "Comment ID is required" });
    }

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
