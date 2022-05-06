import { Result, Button, Row } from "antd";
import { useHistory } from "react-router-dom";

const NotFound404 = () => {
  const history = useHistory();

  return (
    <Row justify="center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.replace("/dashboard")}>
            Back Home
          </Button>
        }
      />
    </Row>
  );
};

export default NotFound404;
