import * as React from 'react';
import FeaturedList from '../../components/featured-list';
import SearchInput from '../../components/search-input';
import { mockData } from '../../mock';
import { FEATURE_LIST_TYPE } from '../../types';
import './index.css';
export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <div className="homepage">
      <div className="search-input-container">
        <SearchInput />
      </div>
      <div className="feature-list-container">
        <FeaturedList type={FEATURE_LIST_TYPE.JAMS} listData={mockData.jams} />
        <FeaturedList type={FEATURE_LIST_TYPE.GAME} listData={mockData.games[0].data} />
      </div>
    </div>
  );
}
