import mongoose, { Document, Schema } from 'mongoose';

interface IDriverStanding extends Document {
  position: number;
  driver: string;
  points: number;
  wins: number;
}

interface IConstructorStanding extends Document {
  position: number;
  team: string;
  points: number;
}

interface IF1Result extends Document {
  year: number;
  driversStandings: IDriverStanding[];
  constructorsStandings: IConstructorStanding[];
}

const F1ResultSchema: Schema = new Schema({
  year: { type: Number, required: true },
  driversStandings: [
    {
      position: Number,
      driver: String,
      points: Number,
      wins: Number,
    },
  ],
  constructorsStandings: [
    {
      position: Number,
      team: String,
      points: Number,
    },
  ],
});

export default mongoose.model<IF1Result>('F1Result', F1ResultSchema);
