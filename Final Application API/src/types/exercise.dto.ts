export interface ExerciseDTO {
    totalExerciseDuration: string;
    intervals: IntervalDTO[];
}

export interface IntervalDTO {
    intervalDuration: string;
    power: number
}

export interface UserMessageDTO {
    FTP: number;
    Time: number;
}