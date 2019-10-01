import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default connect(mapStateToProps, {
    updateNewMessageBody: updateNewMessageBodyCreator,
    sendMessage: sendMessageCreator
})(Dialogs);

