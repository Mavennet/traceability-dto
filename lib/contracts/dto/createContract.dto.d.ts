import { CreateSubContractDTO } from './createSubContract.dto';
export declare abstract class CreateContractDTO {
    sender: string;
    receiver: string;
    destination: string;
    startDate: string;
    endDate: string;
    isMonthly: boolean;
    signedInEmail?: string;
    CreateSubContracts?: CreateSubContractDTO[];
    takeOrPay_Volume?: number;
    tariff?: number;
}
