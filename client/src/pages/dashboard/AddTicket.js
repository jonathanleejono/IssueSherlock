import {
  FormRow,
  FormRowSelect,
  Alert,
  TicketDescriptionText,
} from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddTicket = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    ticketTitle,
    ticketDescription,
    ticketAssignees,
    ticketDueDate,
    ticketPriority,
    ticketPriorityOptions,
    ticketStatus,
    ticketStatusOptions,
    ticketType,
    ticketTypeOptions,
    handleChange,
    clearValues,
    createTicket,
    editTicket,
  } = useAppContext();

  //e = event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ticketTitle || !ticketDescription || !ticketAssignees) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editTicket();
      return;
    }
    createTicket();
  };

  const handleTicketInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit ticket" : "add ticket"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* ticket title */}
          <FormRow
            type="text"
            labelText="ticket title"
            name="ticketTitle"
            value={ticketTitle}
            handleChange={handleTicketInput}
          />
          {/* ticket description */}
          <TicketDescriptionText
            type="text"
            labelText="ticket description"
            name="ticketDescription"
            value={ticketDescription}
            handleChange={handleTicketInput}
          />
          {/* ticket assignees */}
          <FormRow
            type="text"
            labelText="Assignees"
            name="ticketAssignees"
            value={ticketAssignees}
            handleChange={handleTicketInput}
          />
          {/* ticket due date */}
          <FormRow
            type="text"
            labelText="due date"
            name="ticketDueDate"
            value={ticketDueDate}
            handleChange={handleTicketInput}
          />
          {/* ticket type */}
          <FormRowSelect
            name="ticketType"
            labelText="ticket type"
            value={ticketType}
            handleChange={handleTicketInput}
            list={ticketTypeOptions}
          />
          {/* ticket priority */}
          <FormRowSelect
            name="ticketPriority"
            labelText="priority"
            value={ticketPriority}
            handleChange={handleTicketInput}
            list={ticketPriorityOptions}
          />
          {/* ticket status */}
          <FormRowSelect
            name="ticketStatus"
            labelText="status"
            value={ticketStatus}
            handleChange={handleTicketInput}
            list={ticketStatusOptions}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddTicket;
