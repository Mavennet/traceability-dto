import { UpdateSubContractDTO } from './updateSubContract.dto';
export declare abstract class UpdateContractDTO {
    contractId: number;
    startDate: string;
    endDate: string;
    UpdateSubContracts?: UpdateSubContractDTO[];
}
