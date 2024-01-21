import styled from 'styled-components';
import Image from 'next/image';
import Tabs from '../Tabs';
import Input from '../Input';
import Search from '../../../public/SVG/Search.svg';
import SearchedResult from './SearchResult';
import { useRef, useState } from 'react';

const StyledSearchListTitle = styled.div`
  color: #000;
  display: flex;
  text-align: center;
  font-family: Inter;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 3rem;
`;

const StyledSearchListCount = styled.span`
  width: 2.4375rem;
  height: 2.375rem;
  border-radius: 0.625rem;
  background: #f5f5f5;
`;

const SearchList = () => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <div>
      <StyledSearchListTitle>오늘 한끼</StyledSearchListTitle>
      <div
        style={{
          marginTop: '1rem',
          marginLeft: '3rem',
        }}
      >
        <Input
          onChange={(e) => setKeyword(e.target.value)}
          height={'2.5rem'}
          imgIcon={
            <Image src={Search} alt="검색 이미지" width={15} height={15} />
          }
        />

        <div
          style={{
            marginTop: '1.7rem',
          }}
        >
          <Tabs.TabGroup
            tabs={[
              {
                id: '1',
                title: '즐겨찾기',
                content: (
                  <div>
                    <div>즐겨찾기</div>
                    <SearchedResult keyword={keyword} />
                  </div>
                ),
              },
              {
                id: '2',
                title: '식사세트',
                content: (
                  <div>
                    <div>식사세트</div>
                    <SearchedResult keyword={keyword} />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
