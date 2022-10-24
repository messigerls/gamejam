import * as React from 'react';
import { FEATURE_LIST_TYPE } from '../../types';
import FeaturedItem from '../featured-item';
import './index.css';

interface IFeatureListProps {
  type: FEATURE_LIST_TYPE;
  listData: any[];
}

const FeaturedList: React.FunctionComponent<IFeatureListProps> = ({type, listData}) => {
  const handleClickViewMoreBtn = () => {

  }
  return (
    <>
      <div className=''>
        <p className='feature-list-title'>FEATURED {type}</p>
        <div className="feature-list">
          {
            listData.map(item => <FeaturedItem key={item.id} data={item} type={type} />)
          }
        </div>
        <div>
          <button onClick={() => handleClickViewMoreBtn}>VIEW MORE</button>
        </div>
      </div>
    </>
  );
};

export default FeaturedList;
