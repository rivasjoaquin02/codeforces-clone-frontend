export type Result<TData> = { success: true; data: TData } | { success: false; error: string };
