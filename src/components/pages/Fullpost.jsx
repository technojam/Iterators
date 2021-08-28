import React from "react";
import "../css/Fullpost.css";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import container from '@material-ui/core/container'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import { CenterFocusStrong } from "@material-ui/icons";
import { NearMeOutlined, ThumbUpAlt, Comment } from '@material-ui/icons/';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const useStyles = makeStyles((theme) => ({
    commnetCointainer: {
        width: "100%",
        display: "flex",
        margin: "0 0 2em 0",
    },
    commentBox: {
        width: "55%",
        margin: "auto auto"
    },
    editIcon: {
        position: "relative",
        left: '31em',
        top: "-10px",
        transform: "scale(2)"
    },
    editButton: {
        margin: "1em",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icons: {
        padding: "1em",
        width: "30%",
        display: "flex",
        justifyContent: "space-around",
        aliginItem: "center",
    },
    icon: {
        transform: "scale(1.3)",
        cursor: "pointer",
    }
}));

const Fullpost = () => {
    const classes = useStyles();
    return (
        <container>
            <Box p={{ xs: 3, sm: 5, md: 7 }} mt='10px' ml='5em' mr='5em'>
                <Paper>
                    <Box p={3}>
                        <div>
                            The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphs, similar to an underscore at the beginning of the new group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.
                            Indented paragraphs demonstrated in the US Constitution
                            In ancient manuscripts, another mean to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.
                            A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters (or word processing software) may put in an arbitrary vertical space by adjusting leading. This style is very common in electronic formats, such as on the World Wide Web and email. Wikipedia itself employs this format.[citation needed]
                            The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphs, similar to an underscore at the beginning of the new group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences. The hedera leaf (e.g. ☙) has also been used in the same way.
                            Indented paragraphs demonstrated in the US Constitution
                            In ancient manuscripts, another mean to divide sentences into paragraphs was a line break (newline) followed by an initial at the beginning of the next paragraph. An initial is an oversized capital letter, sometimes outdented beyond the margin of the text. This style can be seen, for example, in the original Old English manuscript of Beowulf. Outdenting is still used in English typography, though not commonly.[3] Modern English typography usually indicates a new paragraph by indenting the first line. This style can be seen in the (handwritten) United States Constitution from 1787. For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph white space, or put in the indentation space.
                        </div>
                    </Box>
                </Paper>
                <div className={classes.buttons}>
                    <Button
                        className={classes.editButton}
                        color="secondary"
                        variant="outlined"
                        endIcon={<EditOutlinedIcon />}>
                        Edit
                    </Button>
                    <div className={classes.icons}>
                        <ThumbUpAlt className={classes.icon} />
                        <Comment className={classes.icon} />
                        <NearMeOutlined className={classes.icon} />
                    </div>
                </div>
            </Box>

            <form className={classes.commnetCointainer} noValidate autoComplete="off">
                <TextField
                    className={classes.commentBox}
                    label="Write Comment"
                    variant="outlined"
                    color="secondary"
                    multiline
                />
            </form>

        </container>


    );
};

export default Fullpost;
