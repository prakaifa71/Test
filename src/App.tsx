import "./App.css";
import {
  Button,
  Form,
  Input,
  message,
  Select,
} from "antd";

function App() {

  const [form] = Form.useForm();
  const name = Form.useWatch('name', form);
  const lastname = Form.useWatch('lastname', form);
  const dog = Form.useWatch('dog', form);

  const isEnableSubmit = name && lastname && dog;
  return (
    <>
    
      <h1>Test Form</h1>
      <div color="#ffffff">
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
              console.log(values);
              message.success("เริ่ด");
  }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[{ required: true, message: "Please input lastname" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Dog"
            name="dog"
            rules={[{ required: true, message: "Please select Dog" }]}
          >
            <Select
              options={[
                { label: "Irene", value: "irene" },
                { label: "Alice", value: "alice" },
                
{ label: "Uka", value: "Uka" },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={!isEnableSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default App;
