import React from 'react';
import { Avatar, CircularProgress } from 'material-ui';
import {
    MediaCard,
} from 'cyverse-ui';

const SkeletonText = props => (
    <div>
        <div
            style={{
                height: "10px",
                width: "80%",
                marginBottom: "10px",
                background: "#EFEFEF"
            }}
        />
        <div
            style={{
                height: "10px",
                width: "70%",
                background: "#EFEFEF"
            }}
        />
    </div>
)
export default props => (
    <div style={{ position: "relative" }}>
        <MediaCard
            image={ 
                <Avatar
                    size={ 40 }
                    backgroundColor="#EFEFEF"
                />
            }
            title={ 
                <SkeletonText/>
            }
            summary={
                <SkeletonText/>
            }

        />
        <MediaCard
            image={ 
                <Avatar
                    size={ 40 }
                    backgroundColor="#EFEFEF"
                />
            }
            title={ 
                <SkeletonText/>
            }
            summary={
                <SkeletonText/>
            }
        />
        <MediaCard
            image={ 
                <Avatar
                    size={ 40 }
                    backgroundColor="#EFEFEF"
                />
            }
            title={ 
                <SkeletonText/>
            }
            summary={
                <SkeletonText/>
            }
        />
        <MediaCard
            image={ 
                <Avatar
                    size={ 40 }
                    backgroundColor="#EFEFEF"
                />
            }
            title={ 
                <SkeletonText/>
            }
            summary={
                <SkeletonText/>
            }
        />
        <MediaCard
            image={ 
                <Avatar
                    size={ 40 }
                    backgroundColor="#EFEFEF"
                />
            }
            title={ 
                <SkeletonText/>
            }
            summary={
                <SkeletonText/>
            }
        />
        <CircularProgress
            size={ 75 }
            style={{
                position: "absolute",
                marginRight: "auto",
                marginLeft: "auto",
                right: 0,
                left: 0,
                top: "50px"
            }}
        />
        <div
            style={{
                background: "linear-gradient(to bottom, rgba(240,240,245,0) 0%,rgba(240,240,245,1) 90%,rgba(240,240,245,1) 100%)",
                position: "absolute",
                bottom: "-30px",
                right: "-5px",
                left: "-5px",
                height: "300px",
            }}
        />
    </div>
);
