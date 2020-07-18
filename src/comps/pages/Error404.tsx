import * as React from "react";
import styled from "styled-components";

const NotFoundPageWrapper = styled.div`
  text-align: center;
`;

const ErrorCode = styled.span`
  font-size: 3em;
`;

const ErrorContent = styled.span`
  font-size: 1.2em;
  margin-left: 0.3em;
`;

const ErrorDescription = styled.div`
  margin-top: 0.75em;
  font-size: 0.8em;
  color: #999;
`;

const errorMessagesList = [
  "変なとこにアクセスしてるみたいです。",
  "何か見ようとしたんでしょうか？",
  "時空の狭間にいるようです。",
  "今なら間に合います。戻るボタンを。",
  "未知の土地を歩くのってワクワクしますが、\n帰れなくなりそうで怖いですよね。",
];

export function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorContent>Page not found</ErrorContent>
      <ErrorDescription>
        {
          errorMessagesList[
            Math.floor(Math.random() * errorMessagesList.length)
          ]
        }
      </ErrorDescription>
    </NotFoundPageWrapper>
  );
}
