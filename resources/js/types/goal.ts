export interface Goal {
    id: bigint,
    user_id: bigint,
    title: string,
    description: string,
    progress: number,
    deadline: string,
    created_at: string,
    updated_at: string
};