import * as React from 'react';
import { calculateDiffDay } from '../../helpers';
import { FEATURE_LIST_TYPE } from '../../types';
import './index.css';
interface IJamsItemProps {
  data: any;
  type: FEATURE_LIST_TYPE
}

const FeaturedItem: React.FunctionComponent<IJamsItemProps> = ({data, type}) => {
  const diffDayHour = calculateDiffDay(Date.now() < data.endTime && Date.now() > data.startTime ? Date.now() - data.start : data.end - Date.now())

  return (
    <>
      <div className='feature-item'>
        <img src={data.thumbnailImageUrl || "https://picsum.photos/600/300"} />
        <div style={{padding: 10}}>
          <div>
            <p>{data.name}</p>
            {type === FEATURE_LIST_TYPE.JAMS && <p>Hosted by <span style={{textTransform: 'uppercase'}}>{data.hostProfiles.username}</span></p>}
            {type === FEATURE_LIST_TYPE.GAME && <p><span style={{textTransform: 'uppercase'}}>{data.creatorProfile.username}</span></p>}
          </div>
          {type === FEATURE_LIST_TYPE.JAMS && 
            <div>
              <p>Start in {} days, 12 hours</p>
              <div />
              <p>
                <span>{data.joinedCount} Joined</span> <span>{data.submissionCount} Submission</span>
              </p>
            </div>
          } 
          {type === FEATURE_LIST_TYPE.GAME && 
            <div>
              <p>{data.description}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default FeaturedItem;
