import _ from 'lodash';
import Masseuse from '../models/masseuses';

/**
 * List
 */
export function all(req, res) {
  Masseuse.find({}).exec((err, topics) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(topics);
  });
}

/**
 * Add a Topic
 */
export function add(req, res) {
  Masseuse.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}


export default {
  all,
  add
};
