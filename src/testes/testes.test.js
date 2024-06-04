import { source } from "lowdb/adapters/FileSync";
import{
    getAllUsers,
    seedDatabase,
    getBankAccountById
} from "../../backend/database";
import { DefaultPrivacyLevel, TransactionStatus } from "../models";

describe("Envio de tranfesrências", ()=>{
    beforeEach(()=>{
        seedDatabase();
    });

    test("Verificar se o Usuário consegue fazer uma Transferência", ()=>{
        const usuarioOrigem = getAllUsers()[0];
        const usuarioDestino = getAllUsers()[2];
        const contaUsuarioDestino = getBankAccountById(usuarioOrigem.id)

        const transacao = {
            source: contaUsuarioDestino,
            amount:"100",
            senderid: usuarioOrigem.id,
            receiverId: usuarioDestino.id,
            description: "Pagamento Teste",
            transactionType: "payment",
            privacyLevel: DefaultPrivacyLevel.public,
            status: TransactionStatus.pending
        }
    })

    

    
})

