/**
 * @fileoverview gRPC-Web generated client stub for protobuf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.protobuf = require('./app_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protobuf.FileUploaderClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.protobuf.FileUploaderPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.Req,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Upload = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Upload',
  grpc.web.MethodType.UNARY,
  proto.protobuf.Req,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.upload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Upload',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Upload,
      callback);
};


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.upload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Upload',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Upload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.Req,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Edit = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Edit',
  grpc.web.MethodType.UNARY,
  proto.protobuf.Req,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.Req} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.edit =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Edit',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Edit,
      callback);
};


/**
 * @param {!proto.protobuf.Req} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.edit =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Edit',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Edit);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.protobuf.DeleteReq,
 *   !proto.protobuf.Res>}
 */
const methodDescriptor_FileUploader_Delete = new grpc.web.MethodDescriptor(
  '/protobuf.FileUploader/Delete',
  grpc.web.MethodType.UNARY,
  proto.protobuf.DeleteReq,
  proto.protobuf.Res,
  /**
   * @param {!proto.protobuf.DeleteReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.protobuf.Res.deserializeBinary
);


/**
 * @param {!proto.protobuf.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.protobuf.Res)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.protobuf.Res>|undefined}
 *     The XHR Node Readable Stream
 */
proto.protobuf.FileUploaderClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/protobuf.FileUploader/Delete',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Delete,
      callback);
};


/**
 * @param {!proto.protobuf.DeleteReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.protobuf.Res>}
 *     Promise that resolves to the response
 */
proto.protobuf.FileUploaderPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/protobuf.FileUploader/Delete',
      request,
      metadata || {},
      methodDescriptor_FileUploader_Delete);
};


module.exports = proto.protobuf;

