import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React, { Component } from "react";

export class RegisterProductForm extends Component<any, any> {
  render() {
    const { isOpen, isClosed, isRegister  }= this.props; 
    return (
      <Modal isOpen={isOpen} onClose={isClosed}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader>
                <div className="w-full flex justify-between items-center">
                  <h1>{isRegister ? "Registrar Produto" : "Atualizar Produto"}</h1> 
                </div>
              </ModalHeader>
              <ModalBody>
                <Input label="Nome" />
                <Input label="Preço" />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  className="text-red-600 bg-opacity-20"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  className="text-green-600 bg-opacity-20"
                  onPress={onClose}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
  }
}

