import React from 'react';

import { ContainerComp, NameIssuer, Comment, ContainerImage,
  ImageReceipt, DateUploaded, Value} from './styles';

import {URL_SERVER} from '../../utils/consts';

export default function Receipt({item}) {
  return (
    <ContainerComp>
      <NameIssuer>
        {item.usersIssuer ? item.usersIssuer.username: "Anônimo"}
      </NameIssuer>
      <Comment>
        {item.comment}
      </Comment>
      <Value>
        R$ {Number(item.value).toFixed(2)}
      </Value>
      <ContainerImage>
        <ImageReceipt  src={URL_SERVER+ item.url} />
      </ContainerImage>
      <DateUploaded>
        {item.created_at}
      </DateUploaded>
    </ContainerComp>
  );
}
