export declare abstract class CreateSubContractDTO {
    shipperEmail: string;
    pipeline: string;
    contractId: number;
    takeOrPay_Commitment_BPD: number;
    cost: number;
    NOS_Period: string | Date;
    Delivery_Facility?: string;
}
