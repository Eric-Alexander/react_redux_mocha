import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const VideoListRow = ({video}) => {
  return (
    <tr>
      <td><a href={video.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/video/' + video.id}>{video.title}</Link></td>
      <td>{video.authorId}</td>
      <td>{video.category}</td>
      <td>{video.length}</td>
    </tr>
  );
};

VideoListRow.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoListRow;
