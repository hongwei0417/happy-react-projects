import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const FilterList = () => {
  return (
    <div>
      <ButtonGroup
        color="secondary"
        variant="text"
        aria-label="text button group"
      >
        <Button>All</Button>
        <Button>Todo</Button>
        <Button>Done</Button>
      </ButtonGroup>
    </div>
  );
};
export default FilterList;
