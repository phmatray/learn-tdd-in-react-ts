import React from "react";

import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewMessageForm from "../NewMessageForm";

describe("<NewMessageForm />", () => {
  afterEach(cleanup);

  describe("clicking the send button", () => {
    let sendHandler: jest.Mock<void, [string]>;

    beforeEach(() => {
      sendHandler = jest.fn();
      render(<NewMessageForm onSend={sendHandler} />);

      userEvent.type(screen.getByTestId("messageText"), "New message");
      userEvent.click(screen.getByTestId("sendButton"));
    });

    it("clears the text field", () => {
      expect(screen.getByTestId("messageText").textContent).toEqual("");
    });

    it("calls the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New message");
    });
  });
});
