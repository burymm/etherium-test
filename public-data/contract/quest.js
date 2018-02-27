var jsonLink = 'test.link' ;
var jsonHash = 'hash' ;
var questionnaireContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getQuestionsHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAnswersHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"jsonLink","type":"string"},{"name":"jsonHash","type":"string"}],"name":"postResults","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"jsonLink","type":"string"},{"name":"jsonHash","type":"string"}],"name":"postAnswers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAnswersLink","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getResultsLink","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getQuestionsLink","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getResultsHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"jsonLink","type":"string"},{"name":"jsonHash","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"string"}],"name":"NewAnswers","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"string"}],"name":"NewResults","type":"event"}]);
var questionnaire = questionnaireContract.new(
  jsonLink,
  jsonHash,
  {
    from: web3.eth.accounts[0],
    data: '0x6060604052341561000f57600080fd5b60405162000ecd38038062000ecd833981016040528080518201919060200180518201919050506000825111151561004657600080fd5b6000815111151561005657600080fd5b6040805190810160405280838152602001828152506000808201518160000190805190602001906100889291906100b0565b5060208201518160010190805190602001906100a59291906100b0565b509050505050610155565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100f157805160ff191683800117855561011f565b8280016001018555821561011f579182015b8281111561011e578251825591602001919060010190610103565b5b50905061012c9190610130565b5090565b61015291905b8082111561014e576000816000905550600101610136565b5090565b90565b610d6880620001656000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631067a9d8146100935780631329ad2d1461012157806335b5f863146101af5780634e31d7231461024f578063667d3f4a146102ef5780639215832f1461037d578063991ff07f1461040b578063e14b350b14610499575b600080fd5b341561009e57600080fd5b6100a6610527565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e65780820151818401526020810190506100cb565b50505050905090810190601f1680156101135780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012c57600080fd5b6101346105d2565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610174578082015181840152602081019050610159565b50505050905090810190601f1680156101a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101ba57600080fd5b61024d600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506106ba565b005b341561025a57600080fd5b6102ed600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107e5565b005b34156102fa57600080fd5b61030261099b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610342578082015181840152602081019050610327565b50505050905090810190601f16801561036f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038857600080fd5b610390610a83565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d05780820151818401526020810190506103b5565b50505050905090810190601f1680156103fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561041657600080fd5b61041e610b2e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561045e578082015181840152602081019050610443565b50505050905090810190601f16801561048b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104a457600080fd5b6104ac610bd8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ec5780820151818401526020810190506104d1565b50505050905090810190601f1680156105195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61052f610c83565b60006001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b5050505050905090565b6105da610c83565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106b05780601f10610685576101008083540402835291602001916106b0565b820191906000526020600020905b81548152906001019060200180831161069357829003601f168201915b5050505050905090565b600082511115156106ca57600080fd5b600081511115156106da57600080fd5b6040805190810160405280838152602001828152506002600082015181600001908051906020019061070d929190610c97565b50602082015181600101908051906020019061072a929190610c97565b509050503373ffffffffffffffffffffffffffffffffffffffff167f7d95765123f2db8c7ecfe28fa116a85dc866c00208b09c4d8007f2097c6d6690836040518080602001828103825283818151815260200191508051906020019080838360005b838110156107a757808201518184015260208101905061078c565b50505050905090810190601f1680156107d45780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b600082511115156107f557600080fd5b604080519081016040528083815260200182815250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190610865929190610c97565b506020820151816001019080519060200190610882929190610c97565b509050503373ffffffffffffffffffffffffffffffffffffffff167f5fe1aeb826363f497ea21d727021c8bb426132286d0b70a4c423b4a25a6bf5cd600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156109895780601f1061095e57610100808354040283529160200191610989565b820191906000526020600020905b81548152906001019060200180831161096c57829003601f168201915b50509250505060405180910390a25050565b6109a3610c83565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a795780601f10610a4e57610100808354040283529160200191610a79565b820191906000526020600020905b815481529060010190602001808311610a5c57829003601f168201915b5050505050905090565b610a8b610c83565b60026000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b245780601f10610af957610100808354040283529160200191610b24565b820191906000526020600020905b815481529060010190602001808311610b0757829003601f168201915b5050505050905090565b610b36610c83565b600080018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bce5780601f10610ba357610100808354040283529160200191610bce565b820191906000526020600020905b815481529060010190602001808311610bb157829003601f168201915b5050505050905090565b610be0610c83565b60026001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c795780601f10610c4e57610100808354040283529160200191610c79565b820191906000526020600020905b815481529060010190602001808311610c5c57829003601f168201915b5050505050905090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610cd857805160ff1916838001178555610d06565b82800160010185558215610d06579182015b82811115610d05578251825591602001919060010190610cea565b5b509050610d139190610d17565b5090565b610d3991905b80821115610d35576000816000905550600101610d1d565b5090565b905600a165627a7a72305820064836aa849c1c829e1cea58f21fc21b88303afcf4c13c4da86e4144dd5c1ce50029',
    gas: '4700000'
  }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
      console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
  })


//loadScript("D:\\work\\etherium\\contract\\quest.js");