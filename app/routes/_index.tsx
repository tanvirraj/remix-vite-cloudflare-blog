import { Form } from "@remix-run/react";

export default function Index() {
  const value = "Tanvir";
  return (
    <div>
      <h1>Welcome to Remix+react+vite</h1>
      {value ? (
        <>
          <p>Value: {value}</p>
          <Form method="DELETE">
            <button>Delete</button>
          </Form>
        </>
      ) : (
        <>
          <p>No value</p>
          <Form method="POST">
            <label htmlFor="value">Set value: </label>
            <input type="text" name="value" id="value" required />
            <br />
            <button>Save</button>
          </Form>
        </>
      )}
    </div>
  );
}
